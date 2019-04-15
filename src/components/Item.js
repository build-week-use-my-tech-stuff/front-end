import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';

class Item extends React.Component {

    render(){
        return (
            <div>
                {/* <div>
                    <img>{props.item.picture}</img>
                    <h1>{props.item.name}</h1>
                    <p>{props.item.seller}</p>
                    <p>{props.item.cost}</p>
                    <p>{props.item.description}</p>
                </div>
                <button onClick = {() => props.deleteItem(props.item.id)}>Delete Item</button>
                <button onClick = {() => props.updateItem(props.item.id)}>Edit Item</button> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    deletingItem: state.deletingItem,
    updatingItem: state.updatingItem,
    error: state.error
})

export default connect(mapStateToProps, { deleteItem, updateItem })(Item);