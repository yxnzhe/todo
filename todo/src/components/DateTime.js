import  React, { useState , useEffect } from 'react'
import '../index.css'

export const DateTime = () => {
  var [date,setDate] = useState(new Date());
    
	useEffect(() => {
		var timer = setInterval(()=>setDate(new Date()), 1000 )
		return function cleanup() {
				clearInterval(timer)
		}
	
	});

	return(
		<div className='datetimeContainer'>
			<p className='date'>{date.toLocaleDateString()}</p>
			<p className='time'>{date.toLocaleTimeString()}</p>
		</div>
	)
}

export default DateTime