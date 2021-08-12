import styled from 'styled-components';

export const ListBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    width:100%;
    background: #000;
`;
export const Form = styled.form``;

export const Input = styled.input`
    width: "20rem";
    background: "#F2F1F9";
    border: "none";
`;

export const Card = styled.div`
    max-width: 50%;
    padding: 24px 32px;
    border-radius: 4px;

    .card {
        background: yellow;
        display: flex;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 20px;  
        text-align:center;
        font-family: arial;
        overflow:auto;
    }

    footer{
        width:100%;
    }

`;
