import React from 'react';
import { Accordion } from 'react-bootstrap';

class DaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true}
	}

	handleClick = (e) => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render(){
		const {dt, weather, temp, feels_like}=this.props.informDay;
		let date = new Date(dt*1000);
		return(
			<div onClick={this.handleClick}>
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
				{
					this.state.isToggleOn
					? 
					<div className='forecast__sublist'>
						<div className='forecast__sublist-up'>
							<div className='forecast__sublist-img'>
								<img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" width={55} height={55}></img>
							</div>
							<div className='forecast__sublist-description'>
								<div>
									<span>{weather[0].description}. Feels like {feels_like.day}°C</span>
								</div>
								<div>
									<span>The high will be {temp.max}°C, the low will be {temp.min}°C</span>
								</div>
							</div>
						</div>
						<div className='forecast__sublist-down'></div>
						
					</div>
					: ""
				}
			</div>
		)
	}
}

export default DaysForecast;