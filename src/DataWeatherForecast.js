import React from 'react';
import Forecast10 from './data/forecast-10.json'

var isDebug = true;

class DataWeatherForecast extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.loadData();
	}

	mapData = (response) =>{
		console.log(response);
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
		return(
			<div className='forecast__cities'></div>
			
		)
	}
}

export default DataWeatherForecast;