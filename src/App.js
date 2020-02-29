import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";
import Header from "./components/header/Header";

class App extends React.Component {

    state = {
        data: null,
        counter: 0,
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
        let counted = this.state.counter;
        let user = this.state.data.find(u => u.id === userID);
        if (user.counted) {this.setState({counter: --counted})}
        let filtered = users.filter(user => (user.id !== userID));
        this.setState({data: filtered});
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(value => {
                this.setState({data: value})
            })
    };

    countUser = (userID) => {
        let user = this.state.data.find(u => u.id === userID);
        let {counter} = this.state;
        user.counted = !user.counted;
        user.counted ? counter++ : counter--;
        this.setState( {counter: counter} )
    };

    btnName = (counted) => {
        return (counted ? 'Remove' : 'Add')
    };

    render () {
        const {data, counter} = this.state;
        return (
            <div className="App">
                <Header myFunc = {this.sortList} usersAdded={counter}/>
                {data
                    ? data.map(item => {return <Card user={item} key={item.id} myFunc={this.deleteUser} myFunc2={this.countUser} myFunc3={this.btnName}/>})
                    : 'Loading...'}
            </div>
        );
    };
}

export default App;
