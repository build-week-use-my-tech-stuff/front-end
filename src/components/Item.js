import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem, fetchingItems } from '../actions';
import { ItemContainer, ActionBtn, Img, Inputs } from './StyledComponents';

class Item extends React.Component {
    
    constructor(props){
        super(props);
        console.log("looking for items", this.props.item);
        this.state = {
            availability: true,
            editing: false,
            newName: this.props.item.name, //changed from this.props.name
            newCategory: this.props.item.category,  //changed from this.props.category
            newCost: this.props.item.cost, //changed from this.props.cost
            newDescription: this.props.item.description, //changed from this.props.description
            user: this.props.item.user,
            id: this.props.item.id
        }
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.item.id != this.props.item.id) {
    //         this.props.fetchingItems()
    //     }
    // }
    handleEdits = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleUpdate = () => {
        
        return (id) => {
            console.log('$$$$$$$$$$UPDATYE!', id);
            this.props.updateItem(id,
                {
                id: this.props.item.id,
                name: this.state.newName, 
                category: this.state.newCategory,
                description: this.state.newDescription,  
                cost: this.state.newCost});
            this.setState({ editing: false })
        }
    }

    toggleRented =(id) => {
        this.props.updateItem(id)
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
        // console.table(this.props.item)
        let editBtn = 'Edit Item';
        this.state.editing ? editBtn = 'Submit Update' : editBtn = 'Edit Item';
        let editBtnFunction = this.handleUpdate; 
        this.state.editing ? editBtnFunction = this.handleUpdate() : editBtnFunction = this.toggleEdits;
        return (
            <ItemContainer>
                <div>
                   {this.props.item &&  <Img src = {this.props.item.picture} alt = 'rentable item' className = 'itemImg'/>}
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
                    {!this.state.editing ? (<p>Category: {this.props.item.category}</p>) : 
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
                    <p> Lender: {this.props.item.user} </p>
                    {!this.state.editing ? (<p>Cost: {this.props.item.cost}$/day</p>) : 
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
                    {!this.state.editing ? (<p>{this.props.item.description}</p>) : 
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
                {this.state.availability ? <ActionBtn onClick = {() =>this.toggleRented(this.props.item.id)}>Rent Item</ActionBtn> : <p className = 'rented'>This Item Has Been Rented</p>}
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

export default connect(mapStateToProps, { deleteItem, updateItem, fetchingItems })(Item);