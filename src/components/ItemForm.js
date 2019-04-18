import React from 'react';
import { connect } from 'react-redux';
import { addingItem } from '../actions';
import { ItemFormStyle, Inputs, ActionBtn } from './StyledComponents';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            description: '',
            picture: '',
            cost: '',
            availability: true,
        }
    }

    handleAddChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddItem = event => {
        // console.log(this.props.user_id);
        this.props.addingItem({
            user_id: this.props.user_id, 
            name: this.state.name, category: this.state.category,
            description: this.state.description, picture: this.state.picture, 
            cost: this.state.cost, availability: this.state.availability
        });
        this.setState({
            name: '',
            category: '',
            description: '',
            picture: '',
            cost: '',
            availability: true,
        })
    }

    render() {
        return (
            <ItemFormStyle>
                <h1> Create a New Listing </h1>
                <form>
                    <Inputs 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Item Name'
                        onChange = {this.handleAddChange}
                        value = {this.state.name}
                    />
                    <Inputs 
                        type = 'text'
                        name = 'category'
                        placeholder = 'Category'
                        onChange = {this.handleAddChange}
                        value = {this.state.category}
                    />
                    <Inputs 
                        type = 'text'
                        name = 'cost'
                        placeholder = 'Cost To Rent'
                        onChange = {this.handleAddChange}
                        value = {this.state.cost}
                    />
                    <Inputs 
                        type = 'text'
                        name = 'description'
                        placeholder = 'Item Description'
                        onChange = {this.handleAddChange}
                        value = {this.state.description}
                    />
                    <Inputs 
                        type = 'text'
                        name = 'picture'
                        placeholder = 'Image URL'
                        onChange = {this.handleAddChange}
                        value = {this.state.picture}
                    />
                </form>
                <ActionBtn onClick = {this.handleAddItem}>Add Item</ActionBtn>
            </ItemFormStyle>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.user_id,
    addingItem: state.addingItem,
    error: state.error
})

export default connect(mapStateToProps, { addingItem })(ItemForm);