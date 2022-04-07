import React from 'react';

class DaysForecast extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		const {dt, weather, temp}=this.props.informDay;
		let date = new Date(dt*1000);
		return(
			<div className='forecast__list'>
				<div className='forecast__list-row'>
					<div className='forecast__list-data'>
						{date.toLocaleDateString('en-US', {
						weekday: 'short',
						day: 'numeric', // numeric, 2-digit
						month: 'short', // numeric, 2-digit, long, short, narrow
						})}
					</div>
					<div className='forecast__list-tamp'>
						<img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" width={55} height={55}></img>
						<span>{temp.day}/{temp.night}°C</span>
					</div>
					<div className='forecast__list-description'>
						<span>{weather[0].description}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default DaysForecast;