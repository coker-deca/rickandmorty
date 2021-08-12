import styled from 'styled-components';

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
`;

export const LogoImage = styled.div`
    width: 150px;
    height: 150px;

    img {
        width: 100%;
    }

    @media (max-width: 400px) {
        width: 80px;
        height: 80px;
    }
`;

export const LogoText = styled.div`
    margin-left: 10px;

    h3 {
        font-family: 'Schwifty';
        font-size: 60px;
        margin: 0;
        color: #08B2C9;
        -webkit-text-stroke: 0.5px black;
        text-shadow: #C4D560 1px 0 10px;
    }
    
    span {
        font-family: 'Schwifty';
        font-size: 40px;
        color: #08B2C9;
        -webkit-text-stroke: 0.5px black;
        text-shadow: #C4D560 1px 0 10px;
    }

    @media (max-width: 400px) {
        h3 {
            font-size: 30px;
        }

        span {
            font-size: 25px;
        }
    }

    @media (max-width: 310px) {
        h3 {
            font-size: 22px;
        }

        span {
            font-size: 18px;
        }
    }
`;
