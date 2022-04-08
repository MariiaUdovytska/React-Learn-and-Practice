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
					<span className='forecast__list-data'>
						{date.toLocaleDateString('en-US', {
						weekday: 'short',
						day: 'numeric', // numeric, 2-digit
						month: 'short', // numeric, 2-digit, long, short, narrow
						})}
					</span>
					<div className='forecast__list-tempwdesc'>
						<div className='forecast__list-temp'>
							<img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" width={55} height={55}></img>
							<span>{temp.day}/{temp.night}°C</span>
						</div>
						<span className='forecast__list-description'>
							{weather[0].description}
						</span>
					</div>
					
				
			</div>
		)
	}
}

export default DaysForecast;