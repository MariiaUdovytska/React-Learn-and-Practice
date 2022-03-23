
import React from 'react';



function Menu(props){
	return(
	<nav className='Menu'>
		<ul className='UlMenu'>
			<li>Сhoose city</li>
			<li>Market</li>
			<li>
				{props.direction}
			</li>
		</ul>
	</nav>
	)
}

function MyFirstComponent(props) {
	return(
			<div className='Header'>
				<div className='LogoWName'>
					<i className="bi bi-cloud-sun-fill Logo__img" style={{ fontSize: '50px', color: 'cornflowerblue'}}></i>
					<span className='Logo__name'>
						{props.firstHeader.name}
					</span>
				</div>
				<Menu direction={props.direction} sun={props.sun}/>
			</div>
	)
}

export default MyFirstComponent;