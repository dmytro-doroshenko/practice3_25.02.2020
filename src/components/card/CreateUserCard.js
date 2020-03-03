import React, {useState} from 'react';

function CreateUserCard ({myFunc, myFunc2}) {

    const [inputID,setInputID] = useState('');
    const [inputName,setInputName] = useState('');
    const [inputUsername,setInputUsername] = useState('');
    const [inputCity,setInputCity] = useState('');

    const createUser = (event) => {
        const newUserData = {
            id: inputID,
            name: inputName,
            username: inputUsername,
            address: {
                city: inputCity,
            }
        };
        if (myFunc2(newUserData.id)) {
            myFunc(newUserData);
            event.preventDefault();
        }
        else {
            alert('ID must be unique!');
            event.preventDefault();
            return false;
        }
    };

    return (
        <div className="card" style={{width : '18rem',float: 'left',height: '18rem'}}>
            <form className="card-body" onSubmit={(event) => createUser(event)}>
                <div className="card-title">
                    <span>ID: </span>
                    <input type='text' name='id' placeholder='Enter your id' onChange={(e) => setInputID(e.target.value)}/>
                </div>
                <div className="card-title">
                    <span>Name: </span>
                    <input type='text' name='name' placeholder='Enter your name' onChange={(e) => setInputName(e.target.value)}/>
                </div>
                <div className="card-title">
                    <span>Username: </span>
                    <input type='text' name='username' placeholder='Enter your username' onChange={(e) => setInputUsername(e.target.value)}/>
                </div>
                <div className="card-title">
                    <span>City: </span>
                    <input type='text' name='city' placeholder='Enter your city' onChange={(e) => setInputCity(e.target.value)}/>
                </div>
                <input type='submit' value='Add' className="btn btn-primary"/>
            </form>

        </div>
    );
}

export default CreateUserCard;