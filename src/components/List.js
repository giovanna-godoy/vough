import React, { Component } from "react";
import { Container, Card, CardTitle, CardText , Title} from "./ListStyles";

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
            <section>
                <Title>Lista de Usuários</Title>
                <Container>
                    {this.state.users.map(item => (
                        <Card key={item.id}>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText> Email: {item.email}</CardText>
                            <CardText> Telefone: {item.phone}</CardText>
                            <CardText> Cidade: {item.address.city}</CardText>
                            <CardText> Companhia: {item.company.name}</CardText>
                        </Card>
                    ))}
                </Container>
            </section>
        );
    }
}

export default List;