import './App.css';
import AddWeatherCities from './AddWeatherCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './NavbarBootstrap';
import Forecast from './Forecast';
import  { BrowserRouter,Routes , Route} from 'react-router-dom';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<BrowserRouter>
					<Navibar firstHeader={{name:"Weather in any city"}}/>
					{/* <Forecast/>
					<AddWeatherCities/> */}
					<Routes>
						<Route exact path="/" element={<AddWeatherCities/>}/>
						<Route path="/forecast" element={<Forecast/>} exact/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
