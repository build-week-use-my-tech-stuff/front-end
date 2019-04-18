import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem, fetchingItems } from '../actions';
import { ItemContainer, ActionBtn, Img, Inputs, Rented, ItemDetails, ItemName, DetailSpan, DetailDesc } from './StyledComponents';

class Item extends React.Component {
    
    constructor(props){
        super(props);
        console.log("looking for items", this.props.item);
        this.state = {
            availability: true,
            editing: false,
            newName: this.props.item.name,
            newCategory: this.props.item.category,
            newCost: this.props.item.cost,
            newDescription: this.props.item.description,
            user: this.props.item.user,
            id: this.props.item.id
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.item != this.props.item) {
            // this.props.fetchingItems();
        }
    }

    handleEdits = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleUpdate = () => {
        return (id) => {
            this.props.updateItem(id,
                {id: this.props.item.id,
                name: this.state.newName, 
                category: this.state.newCategory,
                description: this.state.newDescription,  
                cost: this.state.newCost});
            this.setState({ editing: false })
        }
    }

    toggleRented =() => {
        // this.props.updateItem(id)
        this.setState({
            availability: false
        })
    }

    toggleEdits = event => {
        this.setState({
            editing: true
        })
    }

    render(){
        let editBtn = 'Edit Item';
        this.state.editing ? editBtn = 'Submit Update' : editBtn = 'Edit Item';
        let editBtnFunction = this.handleUpdate; 
        this.state.editing ? editBtnFunction = this.handleUpdate() : editBtnFunction = this.toggleEdits;
        return (
            <ItemContainer>
                <ItemName>
                {!this.state.editing ? (<h2>{this.props.item.name}</h2>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newName'
                            placeholder = {this.props.item.name}
                            value = {this.state.newName}
                            onChange = {this.handleEdits}
                        />
                    </div>                    
                    )}
                   </ItemName>
                   {this.props.item &&  <Img src = {this.props.item.picture} alt = 'rentable item' className = 'itemImg'/>}
                   <ItemDetails>
                    <div>
                    {!this.state.editing ? (<p><DetailSpan>Category: </DetailSpan>{this.props.item.category}</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newCategory'
                            placeholder = {this.props.item.category}
                            value = {this.state.newCategory}
                            onChange = {this.handleEdits}
                        />
                    </div>                    
                    )}
                    {/* {!this.state.editing ? (<p>Lender: {this.props.item.user}</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newUser'
                            placeholder = {this.props.item.user}
                            value = {this.state.newUser}
                            onChange = {this.handleEdits}
                        />
                    </div>                    
                    )} */}
                    <p><DetailSpan> Lender: </DetailSpan>{this.props.item.user} </p>
                    {!this.state.editing ? (<p><DetailSpan>Cost: </DetailSpan>{this.props.item.cost}$/day</p>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newCost'
                            placeholder = {this.props.item.cost}
                            value = {this.state.newCost}
                            onChange = {this.handleEdits}
                        />
                    </div>                    
                    )}
                    {!this.state.editing ? (<DetailDesc>{this.props.item.description}</DetailDesc>) : 
                    (<div> 
                        <Inputs 
                            type = 'text'
                            name = 'newDescription'
                            placeholder = {this.props.item.description}
                            value = {this.state.newDescription}
                            onChange = {this.handleEdits}
                        />
                    </div>                    
                    )}
                    
                </div>
                {this.props.isLoggedIn ? <ActionBtn onClick = {() => this.props.deleteItem(this.props.item.id)}>Delete Item</ActionBtn> : null}
                {this.props.isLoggedIn ? <ActionBtn onClick = {()=> editBtnFunction(this.props.item.id)}>{editBtn}</ActionBtn> : null}
                {this.state.availability ? <ActionBtn onClick = {() =>this.toggleRented(this.props.item.id)}>Rent Item</ActionBtn> : <Rented>This Item Has Been Rented</Rented>}
                {/* <Comment comments = {this.props.item.comments} /> */}
                </ItemDetails>
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

export default connect(mapStateToProps, { deleteItem, updateItem, fetchingItems })(Item);

// {localStorage.getItem('token') ? <ActionBtn onClick = {() => this.props.deleteItem(this.props.item.id)}>Delete Item</ActionBtn> : null}