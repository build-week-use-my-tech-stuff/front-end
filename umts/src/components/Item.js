import React from 'react';

const Item = props => {
    return (
        <div>
            <div>
                <h1>{props.item.name}</h1>
                <p>{props.item.id}</p>
                <p>{props.item.id}</p>
                <p>{props.item.id}</p>
                <p>{props.item.id}</p>
            </div>
            <button>Delete Item</button>
        </div>
    )
}

export default Item;