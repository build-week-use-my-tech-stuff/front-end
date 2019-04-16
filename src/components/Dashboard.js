import React from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import { fetchingItems } from '../actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchingItems();
    }
    render(){
    return (
            <div>
                <ItemForm />
                {/* <input

                /> */}
                <div>
                    {this.props.tech.map(item => (
                        <Item 
                            item = {item}
                            key = {item.id}
                        />
                    ))}
                    {/* <Comments 
                        comments = {this.state.comments}
                    /> */}
                    {/* this goes here or in item.js, followed by a .map in comments.js to render the array of comments in comment  */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tech: state.tech,
    loggingIn: state.loggingIn,
    error: state.error,
})

export default connect(mapStateToProps, { fetchingItems })(Dashboard);