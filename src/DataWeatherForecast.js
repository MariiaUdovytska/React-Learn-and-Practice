import React from 'react';
import LocalTime from './LocalTime';
import DaysForecast from './DaysForecast';
import Forecast10 from './data/forecast-10.json'

var isDebug = true;

class DataWeatherForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city:"",
			country:"",
			timezone:0,
			days:[]
		}
	}

	componentDidMount() {
		this.loadData();
	}

	mapData = (response) =>{
		this.setState({
			city:response.city.name,
			country:response.city.country,
			timezone:response.city.timezone/3600,
			days:response.list
		})
	}

	loadData = ()=>{
		if(isDebug){
			this.mapData(Forecast10);
			return;
		}

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
				'X-RapidAPI-Key': 'c497811108msh60fccf337372cb8p1f70b2jsn15aee00ffb73'
			}
		};
		
		fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${this.props.cityName}&cnt=10&units=metric`, options)
			.then(response => response.json())
			.then(response => this.mapData(response))
			.catch(err => {
				this.setState({
					isLoaded: true,
					err
				});
			});
	}

	render(){
		const {city, country, timezone, days} = this.state;
		let daysForecastArr = [];
		for(let i=0; i<days.length; i++){
			daysForecastArr.push(<DaysForecast key={days[i].dt} informDay={days[i]}/>)
		}
		return(
			<div className='forecast__titlecity'>
				<LocalTime timezone={timezone}/>
				<div className='forecast__titlecity-name'>{city}, {country}</div>
				<div className='forecast__days'>{daysForecastArr}</div>
			</div>
		)
	}
}

export default DataWeatherForecast;