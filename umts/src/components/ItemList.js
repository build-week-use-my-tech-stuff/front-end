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
            </div>
        </div>
    )
}

export default ItemList;