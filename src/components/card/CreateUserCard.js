import React, {Component} from 'react';

function CreateUserCard ({newUserData, myFunc, myFunc2, myFunc3}) {

    const {id, name, username, address} = newUserData;

    const createUser = (event, data) => {
        // if (myFunc3(data.id)) {
        //
        // }
        // else {
        //     alert('ID must be unique!')
        //     event.preventDefault();
        //     return false;
        // }
        console.log([...data])
        myFunc(data);
        event.preventDefault();

    };

    const trackInput = (target) => {
        myFunc2(target.name, target.value);
    };

    return (
        <div className="card" style={{width : '18rem',float: 'left',height: '18rem'}}>
            <form className="card-body" onSubmit={(event) => createUser(event, newUserData)}>
                <div className="card-title">
                    <span>ID: </span>
                    <input type='text' name='id' placeholder='Enter your id' value={id} onChange={(e) => trackInput(e.target)}/>
                </div>
                <div className="card-title">
                    <span>Name: </span>
                    <input type='text' name='name' placeholder='Enter your name' value={name} onChange={(e) => trackInput(e.target)}/>
                </div>
                <div className="card-title">
                    <span>Username: </span>
                    <input type='text' name='username' placeholder='Enter your username' value={username} onChange={(e) => trackInput(e.target)}/>
                </div>
                <div className="card-title">
                    <span>City: </span>
                    <input type='text' name='city' placeholder='Enter your city' value={address.city} onChange={(e) => trackInput(e.target)}/>
                </div>
                <input type='submit' value='Add' className="btn btn-primary"/>
            </form>

        </div>
    );
}

export default CreateUserCard;