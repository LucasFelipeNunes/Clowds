import { useState, useEffect } from 'react'
import './App.css'
import FlightList from './FlightList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap'

function App() {

	const [searchText, setSearchText] = useState("")

	let handleFlightSearchChange = (e) => {
		setSearchText(e.target.value)
		console.log(searchText)
	}

	return (
		<div className="App">
			
			
			<main className="container mt-5 mb-3">
				<header className='row'>
					<h1>Search flights</h1>
				</header>
					<input type="text" name="searchFlightInput" id="searchFlightInput" onChange={handleFlightSearchChange} className="form-control mt-4"/>
					<FlightList searchText={searchText}></FlightList>
				<footer>

				</footer>
			</main>
		</div>
	)
}

export default App
