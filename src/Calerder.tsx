import React from 'react'

interface Events {
    title:string,
    startDate:Date
}

const events:Events[]=[
    {
        title:"Meeting 1",
        startDate:new Date(2023, 8, 12),
    },
    {
        title:"Meeting 2",
        startDate: new Date(2023, 8, 14)
    }
]
    const daysInMonth =(year:number,month:number)=>{
        //For Getting a last Date of a month
        return new Date(year, month + 1, 0).getDate()
    }

const Calerder:React.FC = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const numOfDaysInMonth = daysInMonth(year, month)


    const startDay =  new Date(year,month, 1).getDay()

    //Creating a calendar and push my Data 

    const calendarDays =[]

    //looping through untill the endDate

    for(let i = 1; i<= numOfDaysInMonth;i++)
    {
        const date = new Date(year,month,i)
        const dayEvents = events.filter((event)=>{
            isSameDay(event.startDate,date)
        })

        calendarDays.push(
            <div key={i} className="calendar-day"> 
                <span className="day-number">{i}</span>
                {
                    dayEvents.map((event, index)=>(
                        <div key={index} className ="event">
                            {event.title}
                        </div>
                    )
                    )
                }
            </div>
        )
    }

    return (
        <div>
            
        </div>
    )
}
const isSameDay =(date1:Date ,date2:Date)=>{

    return(
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    )

}
export default Calerder
