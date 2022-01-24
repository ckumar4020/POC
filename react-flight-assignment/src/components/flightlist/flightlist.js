import FlightCard from "./flightcard/flightcard.js";

const FlightList = ({ jList }) => {
	
	
    return (
        <div>
            <div className="List-flight">
                {jList.map(j => {
					return <FlightCard key={j.id} data={j} />
                })}

            </div>
        </div>
    )
};

export default FlightList;