import styled from 'styled-components';

export const AppHeader = styled.div `
    background: black;
    padding: 10px;
    border-bottom: 3px solid black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 20px;
        font-weight: bold;
        margin-left: 30px;
    }
`;

export const LoginForm = styled.div `
    background: lightgray;
    width: 350px;
    height: 300px;
    border: 3px solid black;
    border-radius: 25px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
`;

// Register user form
export const RegisterForm = styled.div `
    background: lightgray;
    width: 400px;
    height: 600px;
    border: 3px solid black;
    border-radius: 25px;
    margin: auto;
    margin-top: 50px;
`;

// all inputs
export const Inputs = styled.input `
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
`;

//Buttons that produce actions
export const ActionBtn = styled.button `
    width: 88%;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
    background-color: maroon;
    color: white;
`;

// Item Display
export const ItemContainer = styled.div `
    background: lightgray;
    width: 600px;
    border: 3px solid black;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
`;

// Add Item Form
export const ItemFormStyle = styled.div `
    background: lightgray;
    width: 400px;
    height: 400px;
    border: 3px solid black;
    border-radius: 25px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 25px;
`;

// Item Image
export const Img = styled.img `
    width: 300px;
    height: 400px;
`;