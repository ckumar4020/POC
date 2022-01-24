import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar';
import FlightList from './components/flightlist/flightlist';

import uparrow from './uparrow.png';
import downarrow from './downarrow.png';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [orgFlights, cloneFlights] = useState([]);
  const [sortStatus, setSortStatus] = useState(true);
  const [sortBy, setSortBy] = useState([]);
  
  const [error, setError] = useState(false);
  
  const getImageName = () => sortStatus ? uparrow : downarrow
  const img = getImageName();
  
  useEffect(() => {

    fetch('/json/api.json')
      .then(res => res.json())
      .then(data => {
        const j = data.data.flights[0].results.j
		setFlights(j);
		cloneFlights(j);
        setSortBy('farepr');
		
      })
      .catch(e => {
        console.log(e)
        setError(true)
      })

  }, [])
 
   const newFlistList = (filterArray) => {
	    setFlights(filterArray);
		
   }
   const handleSort = key => e => {
    const data = flights;
	 setSortBy(key)
	if (sortStatus) {
        let sorted = data.sort((a, b) => b[key]-a[key]);
        setFlights(sorted);
        setSortStatus(!sortStatus);
		
    } else {
        let sorted = data.sort((a, b) => a[key]-b[key]);
        setFlights(sorted);
        setSortStatus(!sortStatus);
		
    }
	
  }

  return (
    <div className="App">

      <Header />

      <div className="App-main">

        <aside>	
			{orgFlights.length ? <Sidebar fList={orgFlights} onChange={newFlistList} /> : 'Something Went Wrong'}
        </aside>

        <main>

          <div className="List-header">
            <div className="List-col"><span>Airline</span></div>
            <div className="List-col">
				<span onClick={handleSort('dTime')}>Depart 
					<img src={img} alt="" style={{display:(sortBy=== 'dTime'? 'inline-block':'none')}}/>
				</span>
			</div>
            <div className="List-col">
				<span onClick={handleSort('aTime')}>Arrive 
					<img src={img} alt="" style={{display:(sortBy=== 'aTime'? 'inline-block':'none')}}/>
				</span>
			</div>
            <div className="List-col">
				<span onClick={handleSort('duration')}>Duration 
					<img src={img} alt="" style={{display:(sortBy=== 'duration'? 'inline-block':'none')}}/>
				</span>
			</div>
            <div className="List-col">
				<span onClick={handleSort('llow')}>Smart 
					<img src={img} alt="" style={{display:(sortBy=== 'llow'? 'inline-block':'none')}}/>
				</span>
			</div>
            <div className="List-col">
				<span onClick={handleSort('farepr')} keyname="farepr">Price 
					<img style={{display:(sortBy==='farepr'? 'inline-block':'none')}} src={img} alt=""/>
				</span>
			</div>
          </div>
          {error ? 'Something Went Wrong' : <FlightList jList={flights} />}

        </main>
      </div>

    </div>
  );
}

export default App;
