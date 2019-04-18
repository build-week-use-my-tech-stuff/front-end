import React from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import { fetchingItems } from '../actions';
import { connect } from 'react-redux';
import { SearchBar } from './StyledComponents';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            tech: '',
            filter: [],
        }
    }
    componentDidMount() {
        this.props.fetchingItems();
        this.setState({
            tech: this.props.tech
        })
    }

    search = event => {
        let search = event.target.value.toLowerCase();
        let filteredItems = this.props.tech.filter(item => {
            if (item.category.toLowerCase().includes(search)) {
                return item;
            }
        })
        this.setState({ filter: filteredItems })
    }

    render(){
        if (!this.props.tech) {
            return <p> Loading.. </p>
        }
        return (
            <div>
                <SearchBar 
                    type = 'text'
                    placeholder = 'Search by Category'
                    onChange = {this.search}
                />
                {/* {this.props.isLoggedIn ? <ItemForm /> : null} */}

                {this.state.filter.length === 0 ?
                    <div>
                        { this.props.tech.map(item => (
                            <Item 
                                item = {item}
                                key = {item.id}
                            />
                        ))}
                    </div>
                : <div>
                { this.state.filter.map(item => (
                    <Item 
                        item = {item}
                        key = {item.id}
                    />
                ))}
                </div> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_id: state.user_id,
        tech: state.tech,
        loggingIn: state.loggingIn,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
    }
}
export default connect(mapStateToProps, { fetchingItems })(Dashboard);