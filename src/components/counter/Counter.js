import React from 'react';

function Counter ({counted}) {

    return (Boolean(counted) && <h1>Users added: {counted}</h1>);
}

export default Counter;