import './App.css';
import Clock from './Clock';
import AddWeatherCities from './AddWeatherCities';
import Header from './Header';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<Header firstHeader={{name:"Weather in any city"}} direction="Cities"/>
				<AddWeatherCities/>
			</div>
		</div>
	);
}



export default App;
