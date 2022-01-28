import './App.css';

function App() {
  return (
    <div className="App">
		<MyFirstComponent   direction="Go dawn" sun="Sun" firstHeader={{name:"Catik", avatarUrl: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"}}/>
		<Menu direction="Go up" sun="Star"/>
    </div>
  );
}


function Menu(props){
	return(
	<nav className='Menu'>
		<ul className='UlMenu'>
			<li>Home</li>
			<li>Sea</li>
			<li>Snow</li>
			<li> Выбери-
				{props.sun}
			</li>
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
		<div className='Wrapper'>
			<div className='Header'>
				<div className='LogoWName'>
					<img className='Logo' width={40} height={40}
						src={props.firstHeader.avatarUrl}
						alt={props.firstHeader.name}
					/>
					<span className='Logo__name'>
						{props.firstHeader.name}
					</span>
				</div>
				
				<Menu direction={props.direction} sun={props.sun}/>
			</div>
		</div>
	)
}

export default App;
