import React from 'react';

function Card({user, myFunc, myFunc2, myFunc3, myFunc4, myFunc5}) {

    const removeUser = (id) => {
        myFunc(id);
    };

    const countUser = (id) => {
        myFunc2(id);
    };

    const btnName = (counted) => {
        return myFunc3(counted);
    };

    const userInfoVisibility = (id) => {
        myFunc4(id)
    };

    const btn2Name = (isHidden) => {
        return myFunc5(isHidden)
    };


    return (
        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '18rem'}}>
            {!user.isHidden &&
                <div className="card-body">
                    <h6 className="card-title">{user.id}</h6>
                    <h4 className="card-title">{user.name}</h4>
                    <h5 className="card-title">{user.username}</h5>
                    <h6 className="card-title">City: {user.address.city}</h6>
                    <a href="#" className="btn btn-primary" onClick={() => removeUser(user.id)}>Delete user</a>
                    <a href="#" className="btn btn-primary" onClick={() => countUser(user.id)}>{btnName(user.counted)}</a>
                </div>
            }
                <a href='#' className='btn btn-primary' onClick={userInfoVisibility.bind(null, user.id)}>{btn2Name(user.isHidden)} User</a>

        </div>
    );
}

export default Card;