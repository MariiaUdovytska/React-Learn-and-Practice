import React from 'react';
import ForecastHours from './ForecastHours';

class DaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: false }
	}

	handleClick = (e) => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		const { dt, weather, main, wind, visibility } = this.props.informDay[0];

		let hoursData = [...this.props.informDay];
		hoursData.shift();
		// console.log(hoursData);

		let hoursForecastArr = [];
		for (let i = 0; i < hoursData.length; i++) {
			hoursForecastArr.push(<ForecastHours key={hoursData[i].dt} informHours={hoursData[i]} />)
		}

		let date = new Date(dt * 1000);
		return (
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
							<span>{main.temp}°C</span>
						</div>
						<span className='forecast__list-description'>
							{weather[0].description}
						</span>
						{
							this.state.isToggleOn
								?
								<i className="bi bi-caret-up-fill" style={{ display: 'inline', marginLeft: '10px', transform: 'rotate(550)', marginTop: '2px', fontSize: '20px', color: '#eb6e4b' }}></i>
								: <i className="bi bi-caret-down-fill" style={{ display: 'inline', marginLeft: '10px', transform: 'rotate(550)', marginTop: '2px', fontSize: '20px', color: 'cornflowerblue' }}></i>
						}
					</div>
				</div>
				{
					this.state.isToggleOn
						?
						<>
							<div className='forecast__sublist'>
								<div className='forecast__sublist-up'>
									<div className='forecast__sublist-img'>
										<img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" width={55} height={55}></img>
									</div>
									<div className='forecast__sublist-description'>
										<div className='forecast__sublist-description-up'>
											<span>{weather[0].description}. Feels like {main.feels_like}°C</span>
										</div>
										<div>
											<span>The high will be {main.temp_max}°C, the low will be {main.temp_min}°C</span>
										</div>
									</div>
								</div>
								<div className='forecast__sublist-center'>
									<ul className='forecast__sublist-ul'>
										<li><span>Humidity: {main.humidity + "%"}</span></li>
										<li><span>Pressure: {main.pressure + "hPa"}</span></li>
										<li><span>Speed: {wind.speed + "m/s"}</span></li>
										<li><span>Visibility: {visibility / 1000 + "km"}</span></li>
										<li><span>Sea level: {main.sea_level + "m"}</span></li>
									</ul>
								</div>
							</div>
							<div className='forecast__sublist-hours'>
								<div className='forecast__sublist-hours-row'>
									<ul>
										{hoursForecastArr}
									</ul>
								</div>
							</div>
						</>
						: ""
				}
			</div>
		)
	}
}

export default DaysForecast;