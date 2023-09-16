import React, { useState } from 'react'
import './Calendar.css'
interface Events {
    title: string,
    startDate: Date
}

const events: Events[] = [
    {
        title: "Meeting 1",
        startDate: new Date(2023, 8, 12),
    },
    {
        title: "Meeting 2",
        startDate: new Date(2023, 8, 14)
    }
]
const daysInMonth = (year: number, month: number) => {
    //For Getting a last Date of a month
    return new Date(year, month + 1, 0).getDate()
}

const Calerder: React.FC = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const numOfDaysInMonth = daysInMonth(year, month)

    const [show, setShow] = useState<boolean[]>(new Array(numOfDaysInMonth).fill(false))

    const handleToggle = (index: number) => {
        const update = [...show]
        update[index] = !update[index]
        setShow(update)
    }

    const startDay = new Date(year, month, 1).getDay()

    //Creating a calendar and push my Data 

    const calendarDays = []

    //looping through untill the endDate

    for (let i = 1; i <= numOfDaysInMonth; i++) {
        const date = new Date(year, month, i)
        const dayEvents = events.filter((event) => {
            isSameDay(event.startDate, date)
        })

        calendarDays.push(
            <div key={i} className="calendar-day">
                <span className="day-number">{i}</span>
                {
                    dayEvents.map((event, index) => (
                        <div key={index} className="event">
                            {event.title}
                        </div>
                    )
                    )
                }
            </div>
        )
    }

    return (
        <div className="Calendar">

            {/* Current Date and year , and current month */}
            <h1>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h1>
            {/* Calendar-weeks  */}
            <div className="calendar-header">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thur</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            {/* Array for the days  */}
            <div className="calendar-grid">

                {
                    [...Array(startDay).fill(null), ...calendarDays].map(
                        (day, index) => {
                            const date = new Date(year, month, index + 1);
                            const dayEvents = events.filter((event) => isSameDay(event.startDate, date));

                            return (
                                <div key={index} className="calendar-day">
                                    <span className="day-number">{index + 1}</span>
                                    {
                                        dayEvents.length > 0 && (
                                            <div className="evenDot" onClick={() => handleToggle(index)}></div>
                                        )
                                    }
                                    {
                                        dayEvents.length > 0 && show[index] && (
                                            <div className="event-title">
                                                {dayEvents.map((event, eventIndex) => (
                                                    <div key={eventIndex} className="event">
                                                        {event.title}
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                            );
                        }
                    )
                }
            </div>
        </div>
    )
}
const isSameDay = (date1: Date, date2: Date) => {

    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    )

}
export default Calerder
