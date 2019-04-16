import React from 'react';
import { connect } from 'react-redux';



const UserAccount = props => {
    console.log("tech!", props.tech);
    console.log("tech!", props.user_id);
    return (
        <div>
            <div> 
                <h1>Username: Patrick777</h1>
                <p>Password: 1234</p>
                <p>Email Address: 123@gmail.com</p>
                <p>First Name: Patrick</p>
            </div>

            <div className = 'item'>
                {props.tech.map(item => {
                    if(item.user_id.toString() === props.user_id.toString()){
                        return (
                        <>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        </>
                        )
                    }
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       tech: state.tech,
       user_id: state.user_id 
    }
}


export default connect(mapStateToProps, {})(UserAccount);