import React from "react"

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="about">
				<h1 className="about__title">About</h1>
				<p className="about__p">This project gives you the opportunity to receive real-time detailed information about weather conditions and weather forecasts in any famous city in the world.</p>
				<p className="about__p">This is my first project done in React using a component approach, using the API, hooking events and using the SPA approach. On this site you can see the current weather at a given time in a city or in several cities at once, as well as see a 10-day forecast, short and more general.</p>
				<p className="about__contacts">
					<span className="about__contacts-span">
						<i class="bi bi-envelope-fill" style={{ display: 'inline', fontSize: '20px', color: '#eb6e4b'}}></i>
						mariiaudovytska06@gmail.com
					</span>
					<span className="about__contacts-span">
						<i class="bi bi-linkedin" style={{ display: 'inline', fontSize: '20px', color: '#eb6e4b'}}></i>
						<a href="https://www.linkedin.com/in/mariia-udovytska-a7b50b227/" target="_blank" rel="noreferrer">in/mariia-udovytska-a7b50b227</a>
					</span>
					<span className="about__contacts-span">
						<i class="bi bi-github" style={{ display: 'inline', fontSize: '20px', color: '#eb6e4b'}}></i>
						<a href="https://github.com/MariiaUdovytska" target="_blank" rel="noreferrer">github.com/MariiaUdovytska</a>
					</span>
				</p>
			</div>
		)
	}
}
export default About;