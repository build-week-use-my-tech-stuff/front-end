import styled from 'styled-components';

export const AppContainer = styled.div `
    text-align: center;
`;

export const AppHeader = styled.div `
    background: #00B1E7;
    padding: 10px;
    box-shadow: 0 1px 10px -2px grey;
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
    padding: 5px;
    background: #00B1E7;
    box-shadow: 0 1px 10px -2px grey;
    text-shadow: 0 0 5px black;
    width: 350px;
    height: 300px;
    border-radius: 25px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
    color: white;
`;

// Register user form
export const RegisterForm = styled.div `
    padding: 5px;
    background: #00B1E7;
    text-shadow: 0 0 5px black;
    box-shadow: 0 1px 10px -2px grey;
    color: white;
    width: 400px;
    height: 600px;
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
    width: 40%;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
    background-color: maroon;
    color: white;
    background-color: gray;
    margin: 2px; 
`;

// Item Display
export const ItemContainer = styled.div `
    background-color: white;
    width: 600px;
    box-shadow: 0 0 10px -2px black;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    text-shadow: 0 0 5px black;

    ${ItemContainer} .rented {
        color: red,
    }
`;

export const Rented = styled.p `
    color: red;
`;

// Add Item Form
export const ItemFormStyle = styled.div `
    padding: 5px;
    background: #00B1E7;
    text-shadow: 0 0 5px black;
    color: white;
    box-shadow: 0 1px 10px -2px grey;
    width: 400px;
    height: 400px;
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

export const AccountItem = styled.div `
    background: lightgray;
    width: 600px;
    border: 3px solid black;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const LogoImg = styled.img `
    height: 50px;
`;

export const ItemDetails = styled.div `
    background-color: #00B1E7;
    color: white;
    padding: 15px;
    border-radius: 0 0 15px 15px;
`;

export const ItemName = styled.div `
    background-color: #00B1E7;
    padding: 2px;
    color: white;
    border-radius: 15px 15px 0 0;
    text-shadow: 0 0 5px black;
`;

export const DetailSpan = styled.span `
    font-weight: bold;
    font-size: 20px;
`;

export const DetailDesc = styled.div `
    text-align: left;
    margin-bottom: 15px;
    padding: 20px;
`;