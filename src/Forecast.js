import React from 'react';
import DataWeatherForecast from './DataWeatherForecast';
import icon_search from './img/weather/icon_search.png'

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {inputValue:'', currentCity:'London'}
	}

	handleSearch = (e) => {
		e.preventDefault();
		let inputValue = this.state.inputValue;
		this.setState({
			currentCity:inputValue
		})
		
	}

	handleUpdateInputValue = (e)=> {
		const val = e.target.value;
		this.setState({
			inputValue: val
		});
	}


	render(){
		return(
			<div className='forecast__search'>
				<div className='forecast__search-actions'>
					<form className='forecast__search-form' onSubmit={this.handleSearch}>
						<input value={this.state.inputValue} onChange={this.handleUpdateInputValue} className='forecast__input' placeholder='city...' aria-label='Search'/>
						<button type='submit' className='forecast__btn'>
							<img src={icon_search} className='forecast__btn-img' alt='search' width={30} height={30}></img>
						</button>
					</form>
					<DataWeatherForecast cityName={this.state.currentCity}/>
				</div>
			</div>
		)
	}
}

export default Forecast;