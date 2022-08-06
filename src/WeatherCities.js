import React from 'react';
import Weather from './Weather';

class WeatherCities extends React.Component {
	render() {
		let weathers = [];
		for (let i = 0; i < this.props.cities.length; i++) {
			weathers.push(<Weather key={this.props.cities[i].key} location={this.props.cities[i].city} />)
		}
		return (
			<div className='Weather__cities'>
				{weathers}
			</div>
		)
	}
}

export default WeatherCities;