import React from 'react';
import { connect } from 'react-redux';
import { AccountInfo, Img, AccountItem, DetailDesc, DetailSpan, ItemDetails, ItemName, AccountDetails } from '../components/StyledComponents';


const UserAccount = props => {
    return (
        <div>
            <AccountInfo>
                <AccountDetails>
                    <h1><DetailSpan>My Account Information</DetailSpan></h1>
                    <div/>
                    <p><DetailSpan>Username: </DetailSpan>{props.user.username}</p>
                    <p><DetailSpan>Email Address: </DetailSpan>{props.user.email}</p>
                    <p><DetailSpan>First Name: </DetailSpan>{props.user.firstname}</p>
                    <p><DetailSpan>Last Name: </DetailSpan>{props.user.lastname}</p>
                    <p><DetailSpan>Country: </DetailSpan>{props.user.country}</p>
                    <p><DetailSpan>State: </DetailSpan>{props.user.state}</p>
                    <p><DetailSpan>Phone Number: </DetailSpan>{props.user.phonenumber}</p>
                </AccountDetails>
                <img src = {props.user.picture} alt = 'profile'/>
            </AccountInfo>

            <div>
                {props.tech.map(item => {
                    if(item.user_id.toString() === props.user_id.toString()){
                        return (
                            <AccountItem>
                                <ItemName>
                                    <h2>{item.name}</h2>
                                </ItemName>
                                <Img src = {item.picture} alt = 'rent item'/>
                                <ItemDetails>
                                    <p><DetailSpan>Item Category: </DetailSpan>{item.category}</p>
                                    <p><DetailSpan>Lender: </DetailSpan>{item.user}</p>
                                    <p><DetailSpan>Cost: </DetailSpan>{item.cost}$/day</p>
                                    <DetailDesc>{item.description}</DetailDesc>
                                </ItemDetails>
                            </AccountItem>
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
       user_id: state.user_id,
       user: state.user 
    }
}


export default connect(mapStateToProps, {})(UserAccount);