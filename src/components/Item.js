import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';
import { ItemContainer, ActionBtn, Img, Inputs } from './StyledComponents';

class Item extends React.Component {
    state = {
        availability: true,
        editing: false,
        newName: this.props.name,
        newCategory: this.props.category,
        newCost: this.props.cost,
        newDescription: this.props.description
    }

    handleEdits = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdate = event => {
        event.preventDefault();
        this.props.updateItem(this.state.newName)
        this.setState({ editing: false })
    }

    toggleRent= event => {
        let rentable = !this.state.availability
        console.log('thisisworking!?', rentable);
        this.setState({
            availability: rentable
        })
    }

    toggleRented = event => {
        this.props.updateItem()
        this.setState({
            availability: false
        })
    }

    render(){
        return (
            <ItemContainer>
                <div>
                    <Img src = {this.props.item.picture} alt = 'rentable item' className = 'itemImg'/>
                    {!this.state.editing ? (<h2>{this.props.item.name}</h2>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newName'
                            placeholder = {this.props.name}
                            value = {this.state.newName}
                            onChange = {this.handleEdits}
                        />
                        <button onClick = {this.handleUpdate}>Update</button>
                    </div>                    
                    )}
                    {!this.state.editing ? (<p>Category: {this.props.item.category}</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newCategory'
                            placeholder = {this.props.category}
                            value = {this.state.newCategory}
                            onChange = {this.handleEdits}
                        />
                        <button onClick = {this.handleUpdate}>Update</button>
                    </div>                    
                    )}
                    {!this.state.editing ? (<p>Lender: {this.props.item.user}</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newUser'
                            placeholder = {this.props.user}
                            value = {this.state.newUser}
                            onChange = {this.handleEdits}
                        />
                        <button onClick = {this.handleUpdate}>Update</button>
                    </div>                    
                    )}
                    {!this.state.editing ? (<p>Cost: {this.props.item.cost}$/day</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newCost'
                            placeholder = {this.props.cost}
                            value = {this.state.newCost}
                            onChange = {this.handleEdits}
                        />
                        <button onClick = {this.handleUpdate}>Update</button>
                    </div>                    
                    )}
                    {!this.state.editing ? (<p>{this.props.item.description}</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newDescription'
                            placeholder = {this.props.description}
                            value = {this.state.newDescription}
                            onChange = {this.handleEdits}
                        />
                        <button onClick = {this.handleUpdate}>Update</button>
                    </div>                    
                    )}
                </div>
                {this.props.isLoggedIn ? <ActionBtn onClick = {() => this.props.deleteItem(this.props.item.id)}>Delete Item</ActionBtn> : null}
                {/* {this.props.isLoggedIn ? <ActionBtn onClick = {() => this.props.updateItem(this.props.item.id)}>Edit Item</ActionBtn> : null} */}
                {this.props.isLoggedIn ? <ActionBtn onClick = {() => this.setState({ editing: true })}>Edit Item</ActionBtn> : null}
                {this.state.availability ? <ActionBtn onClick = {this.toggleRent}>Rent Item</ActionBtn> : <p className = 'rented'>This Item Has Been Rented</p>}
                {/* <Comment comments = {this.props.item.comments} /> */}
            </ItemContainer>
        )
    }
}

const mapStateToProps = state => ({
    availability: state.availability,
    isLoggedIn: state.isLoggedIn,
    deletingItem: state.deletingItem,
    updatingItem: state.updatingItem,
    error: state.error
})

export default connect(mapStateToProps, { deleteItem, updateItem })(Item);