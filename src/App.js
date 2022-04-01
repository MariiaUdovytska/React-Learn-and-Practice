import './App.css';
import Clock from './Clock';
import AddWeatherCities from './AddWeatherCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navibar from './NavbarBootstrap';



function App() {
	return (
		<div className="App">
			<div className='Wrapper'>
				<Navibar firstHeader={{name:"Weather in any city"}}/>
				<AddWeatherCities/>
			</div>
			<div>
				<Button variant="primary">Test</Button>
			</div>
		</div>
	);
}



export default App;
