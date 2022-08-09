import React from 'react';
import LocalTime from './LocalTime';
import DaysForecast from './DaysForecast';
import Forecast10 from './data/forecast-10.json'

var isDebug = false;

class DataWeatherForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: "",
			country: "",
			timezone: 0,
			days: []
		}
	}

	componentDidMount() {
		this.loadData();
	}

	mapData = (response) => {
		this.setState({
			city: response.city.name,
			country: response.city.country,
			timezone: response.city.timezone / 3600,
			days: response.list
		})
	}

	loadData = () => {
		if (isDebug) {
			this.mapData(Forecast10);
			return;
		}

		const options = {
			method: 'GET',
		};

		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityName}&units=metric&appid=1874aca48ccdb4922f4bce5acc0cc837`, options)
			.then(response => response.json())
			.then(response => this.mapData(response))
			.catch(err => {
				this.setState({
					isLoaded: true,
					err
				});
			});
	}

	render() {
		const { city, country, timezone, days } = this.state;

		var result = days.reduce((acc, item) => {
			var date = item.dt_txt.split(' ')[0]
			if (acc[date]) {
				acc[date].push(item)
			} else {
				acc[date] = [item]
			}
			return acc;
		}, {});
		let groups = Object.getOwnPropertyNames(result).map(k => result[k]);

		let daysForecastArr = [];
		for (let i = 0; i < groups.length; i++) {
			daysForecastArr.push(<DaysForecast key={groups[i][0].dt} informDay={groups[i]} />)
		}
		return (
			<div className='forecast__titlecity'>
				<LocalTime timezone={timezone} />
				<div className='forecast__titlecity-name'>{city}, {country}</div>
				<div className='forecast__days'>
					{daysForecastArr}
				</div>
			</div>
		)
	}
}

export default DataWeatherForecast;