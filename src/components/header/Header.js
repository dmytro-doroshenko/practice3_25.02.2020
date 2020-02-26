import React from 'react';

function Header({myFunc}) {

    const sortByName = () => {
        myFunc('sortByName');
    };

    const sortByCity = () => {
        myFunc('sortByCity');
    };

    return (
        <nav className="navbar navbar-dark bg-primary" style={{justifyContent: "flex-start"}}>
            <h1>Header</h1>
            <a href="#" className="btn btn-primary" onClick={sortByName}>Sort by Name</a>
            <a href="#" className="btn btn-primary" onClick={sortByCity}>Sort by City</a>
        </nav>
    );
}

export default Header;