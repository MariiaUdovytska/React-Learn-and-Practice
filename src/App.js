import './App.css';
import AddWeatherCities from './AddWeatherCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './NavbarBootstrap';
import Forecast from './Forecast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.js';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<BrowserRouter basename='/React-Weather-App'>
					<Navibar firstHeader={{ name: "Weather" }} />
					<Routes>
						<Route exact path="/" element={<AddWeatherCities />} />
						<Route path="/forecast" element={<Forecast />} exact />
						<Route path="/about" element={<About />} exact />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
