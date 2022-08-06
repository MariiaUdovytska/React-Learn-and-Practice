import React from 'react';


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date(), sum: { pill: 1 }, mult: 1 };
	}

	start = () => {
		this.timerId = setInterval(
			() => this.tick(),
			1000
		);
	}
	stop = () => {
		clearInterval(this.timerId);
	}

	componentDidMount() {
		// this.timerId = setInterval(
		// 	() => this.tick(),
		// 	1000
		// );
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		let sumMult = this.state.mult;
		this.setState({
			date: new Date(),
			mult: sumMult + 1
		});
	}

	render() {
		return (
			<div className='Tick'>
				<h1>Привет, мир!{this.state.mult}</h1>
				<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
				<button onClick={this.start}>Press Me!</button>
				<button onClick={this.stop}>Press Me Fast!</button>
			</div>
		);
	}
}

export default Clock;