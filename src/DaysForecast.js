import React from 'react';

class DaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: false}
	}

	handleClick = (e) => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render(){
		const {dt, weather, temp, feels_like, pressure, humidity, speed}=this.props.informDay;
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
						{
							this.state.isToggleOn
							? 
							<i className="bi bi-caret-up-fill" style={{ display: 'inline', marginLeft: '10px',transform: 'rotate(550)' ,marginTop: '2px',fontSize: '20px', color: '#eb6e4b'}}></i>
							: <i className="bi bi-caret-down-fill" style={{ display: 'inline', marginLeft: '10px',transform: 'rotate(550)' ,marginTop: '2px',fontSize: '20px', color: 'cornflowerblue'}}></i>
						}
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
								<div className='forecast__sublist-description-up'>
									<span>{weather[0].description}. Feels like {feels_like.day}°C</span>
								</div>
								<div>
									<span>The high will be {temp.max}°C, the low will be {temp.min}°C</span>
								</div>
							</div>
						</div>
						<div className='forecast__sublist-center'>
							<ul className='forecast__sublist-ul'>
								<li><span>Humidity: {humidity+"%"}</span></li>
								<li><span>Pressure: {pressure+"hPa"}</span></li>
								<li><span>Speed: {speed+"m/s"}</span></li>
							</ul>
						</div>
						<div className='forecast__sublist-down'>
							<table className='forecast__sublist-down-table'>
								<tr className='forecast__sublist-down-table-row'>
									<th className='forecast__sublist-down-table-column'></th>
									<th className='forecast__sublist-down-table-column'>Morning</th>
									<th className='forecast__sublist-down-table-column'>Afternoon</th>
									<th className='forecast__sublist-down-table-column'>Evening</th>
									<th className='forecast__sublist-down-table-column'>Night</th>
								</tr>
								<tr className='forecast__sublist-down-table-row'>
									<td className='forecast__sublist-down-table-temp'><div className='forecast__sublist-down-table-temp-enabled'>Temperature</div><div className='forecast__sublist-down-table-temp-desabled'>T</div></td>
									<td className='forecast__sublist-down-table-temp'>{temp.morn}°C</td>
									<td className='forecast__sublist-down-table-temp'>{temp.day}°C</td>
									<td className='forecast__sublist-down-table-temp'>{temp.eve}°C</td>
									<td className='forecast__sublist-down-table-temp'>{temp.night}°C</td>
								</tr>
								<tr className='forecast__sublist-down-table-row'>
									<td className='forecast__sublist-down-table-feels'><div className='forecast__sublist-down-table-feels-enabled'>Feels like</div><div className='forecast__sublist-down-table-feels-desabled'>FL</div></td>
									<td className='forecast__sublist-down-table-feels'>{feels_like.morn}°C</td>
									<td className='forecast__sublist-down-table-feels'>{feels_like.day}°C</td>
									<td className='forecast__sublist-down-table-feels'>{feels_like.eve}°C</td>
									<td className='forecast__sublist-down-table-feels'>{feels_like.night}°C</td>
								</tr>
							</table>
						</div>
					</div>
					: ""
				}
			</div>
		)
	}
}

export default DaysForecast;