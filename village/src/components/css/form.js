import styled from "styled-components"; 

const SmurfFormDiv = styled.div`
    width: 50%;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        border: 1px solid black;
        margin: 10px auto;
    }

    button {
        border: 2px solid black;
        width: 25%;
        margin 5px auto;
        background-color: white;
    }
`;

export default SmurfFormDiv;
