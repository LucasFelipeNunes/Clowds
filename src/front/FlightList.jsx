import { useEffect, useState } from 'react'

function FlightList(props) {

    const [flights, setFlights] = useState([])


    let fetchWords = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/").then(data => data.json()).then(resposta => setFlights(flights.concat(resposta)))
    }
    console.log(props.searchText)

    useEffect(fetchWords, [])
    
    return (
        <div>
            <section className="row d-flex justify-content-center mt-5">
                {
                    

                    flights.filter(content => props.searchText != "" ? content.title.toUpperCase().includes(props.searchText.toUpperCase()) : true).map((flight, key) => {
                        return(
                        <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={key}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{flight.title.length > 15 ? flight.title.substring(0,15) + '...' : flight.title.length }</h5>
                                    <p className="card-text">Some quick example text to build the card.</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                
                }
            </section>
        </div>
       

    )
    
    
}


export default FlightList;