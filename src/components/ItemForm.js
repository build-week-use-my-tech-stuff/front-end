import React from 'react';
import { connect } from 'react-redux';
import { addingItem } from '../actions';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user_id: localStorage.getItem('user_id'),
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
        // event.preventDefault();
        this.props.addingItem({
            user_id: localStorage.getItem('user_id'), 
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
            <div className = 'itemForm'>
                <h1> Add an Item </h1>
                <form>
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Item Name'
                        onChange = {this.handleAddChange}
                        value = {this.state.name}
                    />
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'category'
                        placeholder = 'Category'
                        onChange = {this.handleAddChange}
                        value = {this.state.category}
                    />
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'cost'
                        placeholder = 'Cost To Rent'
                        onChange = {this.handleAddChange}
                        value = {this.state.cost}
                    />
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'description'
                        placeholder = 'Item Description'
                        onChange = {this.handleAddChange}
                        value = {this.state.description}
                    />
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'picture'
                        placeholder = 'Image URL'
                        onChange = {this.handleAddChange}
                        value = {this.state.picture}
                    />
                </form>
                <button className = 'actionBtn' onClick = {this.handleAddItem}>Add Item</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.user_id,
    addingItem: state.addingItem,
    error: state.error
})

export default connect(mapStateToProps, { addingItem })(ItemForm);