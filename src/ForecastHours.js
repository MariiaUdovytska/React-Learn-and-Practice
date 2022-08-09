import React from 'react';


function ForecastHours(props) {
	const { dt, weather, main } = props.informHours;
	let date = new Date(dt * 1000);
	return (
		<li>
			<span>
				{date.toLocaleTimeString('en-US', {
					hour: "2-digit",
					minute: "2-digit"
				})}
			</span>
			<span><img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" width={55} height={55}></img></span>
			<span>{main.temp}°C</span>
		</li>
	);
}

export default ForecastHours;