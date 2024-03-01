import React, {Component} from "react";
import Item from './Item'

export default class Items extends Component{
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <Item item={el} onAdd={this.props.onAdd}/>
                ))}
            </main>
        )
    }
}