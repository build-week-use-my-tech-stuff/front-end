import React from 'react';
import { connect } from 'react-redux';
import { ItemContainer, Img } from '../components/StyledComponents';



const UserAccount = props => {
    // console.log("tech!", props.tech);
    // console.log("tech!", props.user_id);
    return (
        <div>
            <ItemContainer>
                <h1>My Account Information</h1>
                <p>Username: {props.user.username}</p>
                <p>Email Address: {props.user.email}</p>
                <p>First Name: {props.user.firstname}</p>
                <p>Last Name: {props.user.lastname}</p>
                <p>Country: {props.user.country}</p>
                <p>State: {props.user.state}</p>
                <p>Phone Number: {props.user.phonenumber}</p>
                <img src = {props.user.picture} alt = 'profile'/>
            </ItemContainer>

            <ItemContainer>
                {props.tech.map(item => {
                    if(item.user_id.toString() === props.user_id.toString()){
                        return (
                        <>
                            <Img src = {item.picture} alt = 'rent item'/>
                            <h3>{item.name}</h3>
                            <p>Item Category: {item.category}</p>
                            <p>Lender: {item.user}</p>
                            <p>Cost: {item.cost}$/day</p>
                            <p>{item.description}</p>
                        </>
                        )
                    }
                })}
            </ItemContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       tech: state.tech,
       user_id: state.user_id,
       user: state.user 
    }
}


export default connect(mapStateToProps, {})(UserAccount);