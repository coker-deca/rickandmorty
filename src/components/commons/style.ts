import styled from 'styled-components';

export const ListBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    width:100%;
    background: #000;
    justify-content: space-between;
`;
export const Form = styled.form`
    display:flex;
    font-size: 20px;
    color: purple;
    justify-content:center;
    background-color: aqua;
    border-radius: 5px;
    margin-bottom: 20px;
    .row {
        display:flex;
    }
    button {
        width: 10%;
        margin: 38px 0 15px 0;
        border-radius: 4px;
        background: purple;
        color: yellow;
        font-size: 24px;
    }
`;

export const Input = styled.input`
    width: "20rem";
    margin: 38px 75px 0 40px;
    border-radius: 4px;
    background: "#F2F1F9";
    border: "none";
    height: 50%;
`;

export const Card = styled.div`
    max-width: 43%;
    padding: 24px 32px;
    border-radius: 4px;
    h1 {color: orangered;}
    img{max-width: 50%}

    .card {
        background: purple;
        display: flex;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 20px;  
        text-align:center;
        font-family: arial;
        overflow:auto;
        color: blanchedalmond;
    }

    footer{
        width:100%;

        .btn {
            background: greenyellow;
            font-size: 18px;
            min-height: 50px;
            min-width: 100px;
            cursor: pointer;
        }
    }

`;
