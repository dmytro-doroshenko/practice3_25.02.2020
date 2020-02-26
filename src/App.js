import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";
import Header from "./components/header/Header";

class App extends React.Component {

    state = {
        data: null,
    };


    sortList = (sortType) => {
        let listToSort = [...this.state.data];

        if (sortType === 'sortByName') {
            listToSort.sort((a, b) => {return ((a.name === b.name) ? 0 : ((a.name > b.name)? 1: -1))});
        } else if (sortType === 'sortByCity') {
            listToSort.sort((a, b) => {return ((a.address.city === b.address.city) ? 0 : ((a.address.city > b.address.city)? 1: -1))});
        }

        this.setState({data: listToSort});
    };

    deleteUser = (userID) => {
        let users = [...this.state.data];
        let filtered = users.filter(user => (user.id !== userID));
        this.setState({data: filtered});
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(value => {
                console.log(value)
                this.setState({data: value})
            })
    };

    render () {
        const {data} = this.state;
        return (
            <div className="App">
                <Header myFunc = {this.sortList}/>
                {data
                    ? data.map(item => {return <Card user={item} key={item.id} myFunc={this.deleteUser}/>})
                    : 'Loading...'}
            </div>
        );
    };
}

export default App;
