import { useState } from "react"
import sIcon from './icon.png';

const FlightCard = (props) => {
	let data=props.data;
	let fLogo='https://cdn.aertrip.com/resources/assets/scss/skin/img/airline-master/'+data.pca+'.png'
	let stopage=data.ap.join(' -> ')
	let dt1 = new Date(''+data.dd+' '+ data.dt);
	let dt2 = new Date(''+data.ad+' '+ data.at);
    
    let diff =(dt2.getTime() - dt1.getTime()) ;
	data['duration']=diff;
	data['aTime']=dt2.getTime();
	data['dTime']=dt1.getTime();
	
    let hours = Math.floor(diff / (1000 * 60 * 60));
		diff -= hours * (1000 * 60 * 60);
    let mins = Math.floor(diff / (1000 * 60));
		diff -= mins * (1000 * 60);
	
	
    let duration = {
        h : hours,
        m : mins
    }
	
	  const [showText, setShowText] = useState(false)
	  const handleMouseEnter = e => {
		setShowText(e.target.title)
	  }
	  const handleMouseLeave = e => {
		setShowText("")
	  }
  
	return (
        <div className="Flight-card">
            <div className="List-col Flex-left">
			<img src={fLogo} alt={data.pca} />
                <span className="flights-tooltip">{data.pca}</span>
            </div>
           
             <div className="List-col"><span>{data.dt}</span><span className="flights-tooltip">{stopage}</span></div>
             <div className="List-col"><span>{data.at}</span></div>
             <div className="List-col">
				<span>{duration.h}h {duration.m}m</span>
				<span className="flights-tooltip" style={{display:(data.stp !=="0" ? 'inline-block':'none')}}>{data.stp} stop</span>
			</div>
             <div className="List-col">
					<span style={{display:( data.llow ?'inline-block' :'none')}}>
						<img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="" src={sIcon} title={data.llowt}/>
					</span>
					<span className="flights-tooltip">{showText}</span> 
			  </div>
                
            
            <div className="List-col">
                    <span date-fare={data.humane_price.total}>₹ {data.humane_price.total}</span>                
            </div>
        </div>
    )
};

export default FlightCard;