import './App.css';
import Clock from './Clock';
import AddWeatherCities from './AddWeatherCities';
import Header from './Header';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<Header direction="Cities" firstHeader={{name:"Weather in any city"}}/>
				<AddWeatherCities/>
			</div>
		</div>
	);
}



export default App;
