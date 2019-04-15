import React from 'react';
import Item from './Item';
import ItemForm from './ItemForm';

const ItemList = props => {
    return (
        <div>
            <h1>Add an Item</h1>
            <ItemForm />
            <div>
                {props.items.map(item => (
                    <Item 
                        item = {item}
                        key = {item.id}
                    />
                ))}
                {/* <Comments 
                    comments = {this.state.comments}
                /> */}
                {/* this goes here or in item.js, followed by a .map in comments.js to render the array of comments in comment  */}
            </div>
        </div>
    )
}

export default ItemList;