import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';
import { ItemContainer, ActionBtn, Img } from './StyledComponents';

class Item extends React.Component {

    render(){
        return (
            <ItemContainer>
                <div>
                    <Img src = {this.props.item.picture} alt = 'rentable item' className = 'itemImg'/>
                    <h1>{this.props.item.name}</h1>
                    <p>Item Category: {this.props.item.category}</p>
                    <p>Lender: {this.props.item.user}</p>
                    <p>Cost: {this.props.item.cost}$/day</p>
                    <p>{this.props.item.description}</p>
                </div>
                <ActionBtn onClick = {() => this.props.deleteItem(this.props.item.id)}>Delete Item</ActionBtn>
                <ActionBtn onClick = {() => this.props.updateItem(this.props.item.id)}>Edit Item</ActionBtn>
                <ActionBtn>Rent Item</ActionBtn>
                {/* <Comment comments = {this.props.item.comments} /> */}
            </ItemContainer>
        )
    }
}

const mapStateToProps = state => ({
    deletingItem: state.deletingItem,
    updatingItem: state.updatingItem,
    error: state.error
})

export default connect(mapStateToProps, { deleteItem, updateItem })(Item);