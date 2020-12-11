import React, { useState } from 'react';
import ReactDom from 'react-dom';


function Section(props) {

    const [counter, setCounter] = useState(0);
    const [name, changeName] = useState("");
    const [personalTitle, changePersonalTitle] = useState("Your Name");

    function add() {
        setCounter(counter+props.addNum);
    }

    function reduce() {
        setCounter(counter-props.reduceNum);
    }

    function setName(event) {
        setPersonalTitle(props.personalTitle)
        if (event.target.value === "") {
            changePersonalTitle("Your Name");
        }
        changeName(event.target.value);
    }

    function setPersonalTitle(title) {
        changePersonalTitle(title)
    }

    function submitForm(event) {
        event.preventDefault();
        alert("Submitted!");
    }

    function handleClick(event){
        alert(event.type);
    }

    return (
        <section id="events">
            <h2>Events in Action</h2>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
            <button onContextMenu={reduce} name="Reduce">Right Click Reduce</button>
            <p>Result: {counter}</p>
            <input type="text" onChange={setName}/>
            <p>{personalTitle}: {name}</p>
            <form onSubmit={submitForm}>
                <input type="text"/>
                <button>Sign Up</button>
            </form>
        </section>
    );
}
export default Section;