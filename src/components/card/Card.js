import React from 'react';

function Card({user, myFunc, myFunc2}) {

    const removeUser = (id) => {
        myFunc(id);
    };

    const countUser = (id) => {
        myFunc2(id);
    };

    const btnName = (counted) => {
        return (counted ? 'Remove' : 'Add')
    }

    return (
        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">City: {user.address.city}</h5>
                <a href="#" className="btn btn-primary" onClick={() => removeUser(user.id)}>Delete user</a>
                <a href="#" className="btn btn-primary" onClick={() => countUser(user.id)}>{btnName(user.counted)}</a>
            </div>
        </div>
    );
}

export default Card;