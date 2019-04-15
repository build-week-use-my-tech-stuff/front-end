import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                <form>
                    <input 
                        type = 'text'
                        name = 'XX'
                        placeholder = 'XX'
                        onChange = {this.handleAddChange}
                        value = {this.state.XXX}
                    />
                     <input 
                        type = 'text'
                        name = 'XX'
                        placeholder = 'XX'
                        onChange = {this.handleAddChange}
                        value = {this.state.XXX}
                    />
                     <input 
                        type = 'text'
                        name = 'XX'
                        placeholder = 'XX'
                        onChange = {this.handleAddChange}
                        value = {this.state.XXX}
                    />
                </form>
                <button>Add Item</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addingItem: state.addingItem
})

export default connect(mapStateToProps, { addItem })(ItemForm);