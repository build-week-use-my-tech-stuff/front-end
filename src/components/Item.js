import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';

class Item extends React.Component {

    render(){
        return (
            <div className = 'item'>
                <div>
                    {/* <img src = {this.props.items.picture}></img> */}
                    {/* crazy error when i uncomment the image check with tommy */}
                    <h1>{this.props.item.name}</h1>
                    <p>{this.props.item.availability}</p>
                    <p>Item Category: {this.props.item.category}</p>
                    <p>Lender: {this.props.item.user}</p>
                    <p>Cost: {this.props.item.cost}$/day</p>
                    <p>{this.props.item.description}</p>
                </div>
                {/* <button onClick = {() => props.deleteItem(props.item.id)}>Delete Item</button> */}
                {/* <button onClick = {() => props.updateItem(props.item.id)}>Edit Item</button> */}
                <button>rent</button>
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