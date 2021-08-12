import styled from 'styled-components/macro';
import bg from '../../resources/images/rick-and-morty-bg.jpeg';
export const Container = styled.div`
    display: block;
    padding: 30px 50px;
    background: no-repeat center center fixed url(${bg});
    background-size: cover;
`;

export const FooterWrapper = styled.div<{ isMobile: boolean }>`
    display: flex;
    max-width: 100%;
    padding: ${({ isMobile }) => (isMobile ? '46px 0' : '30px 15px')};
    margin: auto;
    flex-direction: column;
    background: #011C6B;


    .divider {
        border-top: 1px solid gray;
        margin: 25px 0;
    }

    .row {
        display: ${({ isMobile }) => (isMobile ? 'block' : 'flex')};
        justify-content: space-between;
        list-style: none;
        align-items: start;
        color: gray;
        font-size: 14ppx;
        width: 100%;
        text-align: center;
        p {
            margin-bottom: 25px;
        }
        .column {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: ${({ isMobile }) => (isMobile ? '16px' : '48px')};

            p {
                color: #08B2C9;
                margin: ${({ isMobile }) => (isMobile ? '0 0 8px 0' : '10px 0 16px 0')};
                font-size: 24px;
                font-weight: 600;
            }
            a {
                margin-bottom: ${({ isMobile }) => isMobile && '16px'};
                color: white;
            }
            .break {
                flex-basis: 100%;
                height: 0;
            }
        }
    }
`;

export const Link = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;
