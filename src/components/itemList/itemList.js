import React, {Component} from 'react';
import styled from 'styled-components';


const ListGroupItem = styled.ul`
    border-radius: 4px;
    cursor: pointer;
`

export default class ItemList extends Component {

    render() {
        return (
            <ListGroupItem>
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ListGroupItem>
        );
    }
}