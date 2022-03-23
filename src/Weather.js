import React from 'react';
import LocalTime from './LocalTime';



class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			weather: undefined,
			city:"",
			icons:"",
			countries: "",
			descriptions:"",
			humidities: "",
			pressures:"",
			speeds:"",
			visibilities:0,
			timezone: 0
		};
	}
	
	componentDidMount() {
		this.loadData();
	}

	loadData = ()=>{
		fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.props.location}&units=metric`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
				"x-rapidapi-key": "c497811108msh60fccf337372cb8p1f70b2jsn15aee00ffb73"
			}
		})
		.then(response => {
			response.json()
			.then(datafff => {
				this.setState({
					isLoaded: true,
					weather: datafff.main,
					city:datafff.name,
					icons:datafff.weather[0].icon,
					countries:datafff.sys.country,
					descriptions:datafff.weather[0].description,
					humidities:datafff.main.humidity,
					pressures:datafff.main.pressure,
					speeds:datafff.wind.speed,
					visibilities:datafff.visibility,
					timezone:datafff.timezone
				});
				console.log(datafff)
				console.log(this.state.weather);
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
			)
		})
		.catch(err => {
			console.error(err);
		});
	}

	render(){

		const {error, isLoaded, weather, city, icons, countries, descriptions, humidities, pressures, speeds, visibilities, timezone} = this.state;
		if (error) {
			return <p> Error {error.message}</p>
		} else if (!isLoaded) {
			return <p> Loading...</p>
		} else{
			return (
				<div className='Weather'>
					<LocalTime timezone={timezone}/>
					<div className='Weather__city'> 
						<div>{city}, {countries}</div>
					</div>
					<div className='Weather__temp'>
						<img src={`https://openweathermap.org/img/wn/${icons}@2x.png`} alt="" width={55} height={55}></img>
						<span>{weather.temp}°C</span>
					</div>
					<div className='Weather__temp-maxmin'>
						<span>Max: {weather.temp_max}°C </span>
						<span>Min: {weather.temp_min}°C</span>
					</div>
					<div className='Weather__description'>
						<p><span>Fels like {weather.feels_like}°C.</span> <span className='Weather__description-second'>{descriptions+"."}</span></p>
					</div>
					<div className='Weather__more'>
						<ul className='Weather__items'>
							<li><span>Humidity: {humidities+"%"}</span></li>
							<li><span>Pressure: {pressures+"hPa"}</span></li>
							<li><span>Speed: {speeds+"m/s"}</span></li>
							<li><span>Visibility: {visibilities / 1000+"km"}</span></li>
						</ul>
					</div>
				</div>
			)
		}
		
	} 
}

export default Weather;