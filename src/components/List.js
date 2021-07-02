import React, { Component } from "react";

class List extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    users: response
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de Usuários</h1>
                <ul>
                    {this.state.users.map(item => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;