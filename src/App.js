import './App.css';
import AddWeatherCities from './AddWeatherCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './NavbarBootstrap';
import Forecast from './Forecast';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<Navibar firstHeader={{name:"Weather in any city"}}/>
				{/* <AddWeatherCities/> */}
				<Forecast/>
			</div>
		</div>
	);
}

export default App;
