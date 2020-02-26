import React from 'react';

function Card({user, myFunc}) {

    const removeUser = (id) =>
        myFunc(id);

    return (
        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">City: {user.address.city}</h5>
                <a href="#" className="btn btn-primary" onClick={() => removeUser(user.id)}>Delete user</a>
            </div>
        </div>
    );
}

export default Card;