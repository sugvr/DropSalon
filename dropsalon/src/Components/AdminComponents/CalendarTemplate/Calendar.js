import React from 'react'
import './Calendar.css'

function Calendar(props) {
    return (
        <div className="Tarjetas2">
            <br></br>
            <h2 className="day" >{props.day}</h2>
            <h3 className="title">{props.title}</h3>
            <ul className= "ListTeam2">
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
            <p>{props.desc}</p>
        </div>
    )
}

export default Calendar;