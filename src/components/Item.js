import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';

class Item extends React.Component {

    render(){
        return (
            <div className = 'item'>
                <div>
                    <img src = {this.props.item.picture} alt = 'rentable item' className = 'itemImg'/>
                    <h1>{this.props.item.name}</h1>
                    <p>{this.props.item.availability}</p>
                    <p>Item Category: {this.props.item.category}</p>
                    <p>Lender: {this.props.item.user}</p>
                    <p>Cost: {this.props.item.cost}$/day</p>
                    <p>{this.props.item.description}</p>
                </div>
                <button className = 'actionBtn' onClick = {() => this.props.deleteItem(this.props.item.id)}>Delete Item</button>
                <button className = 'actionBtn' onClick = {() => this.props.updateItem(this.props.item.id)}>Edit Item</button>
                <button className = 'actionBtn' >Rent Item</button>
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