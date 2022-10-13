import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(["Lucas", "Barabara", "Acabaxi"])

	useEffect(() => {
		fetch("http://localhost:3000", { method: "GET" }).then(data => data.json()).then(resposta => setCount(count.concat([resposta.palavra])))
	},[])

	return (
		<div className="App">
			<main className="container mt-5 mb-3">
				<header>
					<h1>Search flights</h1>
				</header>
				<section className="row d-flex justify-content-center mt-5">
					{
						count.map(counter => {
							return(<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="card p-2">
									
									<div className="card-body">
										<h1 className="card-title">{counter}</h1>
										<p className="card-text">Some quick example text to build the card.</p>
									</div>
								</div>
							</div>)
						})
						
					}
					

				</section>
				<footer>

				</footer>
			</main>
		</div>
	)
}

export default App
