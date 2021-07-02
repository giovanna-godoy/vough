import React, { Component } from "react";
import { Container, Card, CardTitle, CardText , Title} from "./ListStyles";
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';

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
                            <CardText><MailIcon/> {item.email}</CardText>
                            <CardText><PhoneIcon/> {item.phone}</CardText>
                            <CardText><RoomIcon/> {item.address.city}</CardText>
                            <CardText><BusinessIcon/> {item.company.name}</CardText>
                        </Card>
                    ))}
                </Container>
            </section>
        );
    }
}

export default List;