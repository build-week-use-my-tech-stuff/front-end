import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            seller: '',
            cost: '',
            description: '',
            picture: '',
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
        this.props.addItem(item);
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleAddItem}>
                    <input 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Item Name'
                        onChange = {this.handleAddChange}
                        value = {this.state.name}
                    />
                    <input 
                        type = 'text'
                        name = 'seller'
                        placeholder = 'Username'
                        /* look into how to auto-populate this field */
                        onChange = {this.handleAddChange}
                        value = {this.state.XXX}
                    />
                    <input 
                        type = 'text'
                        name = 'cost'
                        placeholder = 'Cost To Rent'
                        onChange = {this.handleAddChange}
                        value = {this.state.cost}
                    />
                    <input 
                        type = 'text'
                        name = 'description'
                        placeholder = 'Item Description'
                        onChange = {this.handleAddChange}
                        value = {this.state.description}
                    />
                    <input 
                        type = 'text'
                        name = 'picture'
                        placeholder = 'Image URL'
                        onChange = {this.handleAddChange}
                        value = {this.state.picture}
                    />
                </form>
                <button type = 'submit'>Add Item</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addingItem: state.addingItem,
    error: state.error
})

export default connect(mapStateToProps, { addItem })(ItemForm);