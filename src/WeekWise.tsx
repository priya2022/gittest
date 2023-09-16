import React from 'react'

interface Events{
    title:string,
    startDate:Date,
    endDate:Date
}

const events: Events[]=[
    {
        title:'Meeting 1',
        startDate: new Date(2023, 8, 12, 10, 0),
        endDate: new Date(2023, 8, 12, 11, 0)
    },
    {
        title:"Meeting 2",
        startDate:new Date(2023, 8, 14, 14, 0),
        endDate:new Date(2023, 8, 14, 15, 0)
    }

]

const WeekWise:React.FC = () => {

    const startDate = new Date(2023, 8, 11);
    const endDate = new Date(2023, 8, 17)
    return (
        <div>
            <h1>Week of {startDate.toLocaleDateString()}</h1>
           <div className="calendar">
            {
                events.map((event,index)=>{
                    if(event.startDate >= startDate && event.endDate <= endDate){
                        return(
                            <div key={index}>
                                <strong>{event.title}</strong>
                                <p>
                                    {event.startDate.toLocaleTimeString()} - {''}
                                    {event.endDate.toLocaleTimeString()}
                                </p>
                            </div>
                        )
                    }
                    return null
                })
            }
           </div>
        </div>
    )
}

export default WeekWise
