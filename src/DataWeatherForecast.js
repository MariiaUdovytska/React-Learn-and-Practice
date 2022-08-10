import React from 'react';
import LocalTime from './LocalTime';
import DaysForecast from './DaysForecast';
import Forecast10 from './data/forecast-10.json'

var isDebug = false;

class DataWeatherForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
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
			isLoaded: true,
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
			.then(response => {
				if (response.ok) {
					return response
						.json()
						.then(this.mapData);
				}
				throw new Error(`Unknown city: ${this.props.cityName}`);
			})
			.catch(err => {
				this.setState({
					isLoaded: true,
					error: err
				});
			});
	}

	render() {
		const { error, isLoaded, city, country, timezone, days } = this.state;

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

		let strange = [];
		for (let i = 0; i < groups.length; i++) {
			const group = groups[i];
			let minTemp = group[0].main.temp_min;
			let maxTemp = group[0].main.temp_max;
			let indexMaxTemp = 0;
			for (let j = 0; j < group.length; j++) {
				if (group[j].main.temp_min < minTemp) {
					minTemp = group[j].main.temp_min;
				}
				if (group[j].main.temp_max > maxTemp) {
					maxTemp = group[j].main.temp_max;
					indexMaxTemp = j;
				}
			}
			strange.push({
				dt: group[0].dt,
				icon: group[indexMaxTemp].weather[0].icon,
				main: {
					temp_min: minTemp,
					temp_max: maxTemp,
					pressure: group[indexMaxTemp].main.pressure,
					sea_level: group[indexMaxTemp].main.sea_level,
					humidity: group[indexMaxTemp].main.humidity,
					feels_like: group[indexMaxTemp].main.feels_like,
				},
				wind: {
					speed: group[indexMaxTemp].wind.speed,
				},
				visibility: group[indexMaxTemp].visibility,
				description: group[indexMaxTemp].weather[0].description,
				hoursArr: group
			});
		}

		let daysForecastArr = [];
		for (let i = 0; i < strange.length; i++) {
			daysForecastArr.push(<DaysForecast key={strange[i].dt} informDay={strange[i]} />)
		}
		if (error) {
			return <p> Error {error.message}</p>
		} else if (!isLoaded) {
			return <p> Loading...</p>
		} else {
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
}

export default DataWeatherForecast;