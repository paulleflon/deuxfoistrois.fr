import './App.css';

function App({color}) {
	return (
		<div
			className='App'
			style={{backgroundColor: color}}
		>
			<div className='sentence'>2 fois 3, ça fait 6.</div>
			<div className='sentence2'>Donc forcément, √2 fois √3, ça fait √6.</div>
		</div>
	);
}

export default App;
