import React from 'react';
import Counter from "../counter/Counter";

function Header({myFunc, usersAdded}) {

    const sortByName = () => {
        myFunc('sortByName');
    };

    const sortByCity = () => {
        myFunc('sortByCity');
    };

    return (
        <nav className="navbar navbar-dark bg-primary" style={{justifyContent: "space-around"}}>
            <h1>Header</h1>
            <a href="#" className="btn btn-primary" onClick={sortByName}>Sort by Name</a>
            <a href="#" className="btn btn-primary" onClick={sortByCity}>Sort by City</a>
            <Counter counted = {usersAdded}/>
        </nav>
    );
}

export default Header;