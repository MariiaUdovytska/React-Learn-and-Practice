import React from 'react';
import WeatherCities from './WeatherCities';
import icon_search from './img/weather/icon_search.png'

class AddWeatherCities extends React.Component {
	constructor(props) {
		super(props);
		let counterStoreKey = localStorage.getItem("counterStore");
		let citiesStoreArr = localStorage.getItem("citiesStore");

		if (counterStoreKey == null)
			counterStoreKey = 1;
		else
			counterStoreKey = parseInt(counterStoreKey);

		if (citiesStoreArr == null)
			citiesStoreArr = [{ key: 0, city: 'London' }];
		else
			citiesStoreArr = JSON.parse(citiesStoreArr);

		this.state = { counter: counterStoreKey, inputValue: '', citiesArr: citiesStoreArr };
	}

	handleSearch = (e) => {
		e.preventDefault();
		let copyArray = [...this.state.citiesArr];
		let counterCities = this.state.counter;
		copyArray.unshift({ key: counterCities, city: this.state.inputValue });

		this.setState({
			citiesArr: copyArray,
			counter: counterCities + 1
		})

		localStorage.setItem("citiesStore", JSON.stringify(copyArray));
		localStorage.setItem("counterStore", counterCities + 1);
	}

	handleDelete = (e) => {
		localStorage.clear();
		this.setState({
			citiesArr: [{ key: 0, city: 'London' }]
		})
	}

	handleUpdateInputValue = (e) => {
		const val = e.target.value;
		this.setState({
			inputValue: val
		});
	}

	render() {
		return (
			<div className='Weather__search'>
				<div className='Weather__search-actions'>
					<form className='Weather__search-form' onSubmit={this.handleSearch}>
						<input value={this.state.inputValue} onChange={this.handleUpdateInputValue} className='Weather__input' placeholder='city...' aria-label='Search' />
						<button type='submit' className='Weather__btn'>
							<img src={icon_search} className='Weather__btn-img' alt='search' width={30} height={30}></img>
						</button>
					</form>
					<button onClick={this.handleDelete} type='button' className='Weather__delete' >
						<i className="bi bi-trash3-fill" style={{ display: 'contents', fontSize: '30px', color: 'white' }}></i>
					</button>
				</div>
				<WeatherCities cities={this.state.citiesArr} />
			</div>
		)
	}
}

export default AddWeatherCities;