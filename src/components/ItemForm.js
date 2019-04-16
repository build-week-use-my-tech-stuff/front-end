import React from 'react';
import { connect } from 'react-redux';
import { addingItem } from '../actions';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user: '',
            cost: '',
            description: '',
            picture: '',
            category: '',
            availability: true,
            comments: [{
                poster: '',
                content: ''
            }]
        }
    }

    handleAddChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddItem = event => {
        // event.preventDefault();
        let item = {...this.state}
        this.props.addingItem(item);
        this.setState({
            name: '',
            user: '',
            cost: '',
            description: '',
            picture: '',
            category: '',
            availability: true,
            comments: [{
                poster: '',
                content: ''
            }]
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
                        name = 'user'
                        placeholder = 'Username'
                        onChange = {this.handleAddChange}
                        value = {this.state.user}
                    />
                    <input
                        className = 'input' 
                        type = 'text'
                        name = 'category'
                        placeholder = 'Item Name'
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
    addingItem: state.addingItem,
    error: state.error
})

export default connect(mapStateToProps, { addingItem })(ItemForm);