import React from 'react';

class LocalTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState({
			date: this.calcTime(this.props.timezone),
		});
	}

	calcTime(offset) {
		var d = new Date();
		var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		return new Date(utc + (3600000*offset));
	}

	render(){
		return(
			<div>{this.state.date.toLocaleString('en-US', {
				day: 'numeric', // numeric, 2-digit
				month: 'short', // numeric, 2-digit, long, short, narrow
				hour: 'numeric', // numeric, 2-digit
				minute: 'numeric', // numeric, 2-digit
				second: 'numeric', // numeric, 2-digit
			})}
			</div>
		)
	}
}
export default LocalTime;