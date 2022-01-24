import React, { useState } from 'react';
import './sidebar.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

const Sidebar = (props) => {	
		const flights=props.fList
		const [flightsLen, setFlightLen] = useState(flights.length);
		const minFare = +Math.min.apply(null, flights.map(function(f) {
				return f.humane_price.total;
			}))
		const maxFare = +Math.max.apply(null, flights.map(function(f) {
				return f.humane_price.total;
			}))
					
		const [value, setValue] = useState({
			min: minFare,
			max: maxFare
		})
		
		const getMinMaxValue = (value) => {						
			let filterList = flights.filter(function(f) {
			  return (+f.humane_price.total>= +value.min && +f.humane_price.total <= +value.max)
			});			
			setFlightLen(filterList.length);
			props.onChange(filterList)
		}
		const clearFilter = () => {
			value.min=minFare
			value.max=maxFare
			
			getMinMaxValue(value)
		  }
	
	
    return (
        <div className="App-sidebar">
            <div>
                <div className="Filter-top">
                    <span>{flightsLen} of {flights.length} flights</span>
                    <span className="Clear-filter" onClick={clearFilter}>Clear filters</span>
                </div>
            </div>
            <div>
                <div className="Filter-price">
                    <div className="Price">
                        <span>Price</span>
                        <span>Reset</span>
                    </div>
                    <div className="Range">
                        <InputRange
                            draggableTrack
                            minValue={minFare}
							maxValue={maxFare}                            
                            value={value}
                            onChange={value => setValue(value)}
                            onChangeComplete={getMinMaxValue} />
                    </div>
                </div>
            </div>
        </div>

    )
	
};

export default Sidebar;