import React, { useState } from "react";
import app from "./base";
import { render } from 'react-dom'
import Calendar from 'react-calendar'


const Home = () => {
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date);
    };
    return (
        <>
            <h1>Bienvenido, Saca Tu Cita Ahora</h1>
            <Calendar onChange={onChange} value={date} />
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
};

render(<Home />, document.querySelector("#root"));

export default Home;