import styled from 'styled-components';

export const Container = styled.div`
    width: 25%;
    display: flex;
    margin-right: 40px;
    .title {
        font-family: Schwifty;
        font-size: 24px;
        line-height: 14px;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 48px;
    background: #fff;
    border: 1px solid rgba(51, 51, 51, 0.28);
    box-sizing: border-box;
    border-radius: 4px;
    margin: 12px 0px;
    .icon {
        position: absolute;
        width: 13px;
        height: auto;
        left: 18.5px;
        bottom: 29px;
    }
    .input {
        width: 100%;
        height: 46px;
        font-size: 24px;
        line-height: 28px;
        padding: 10px;
        color: #000;
        background: transparent;
        border: none;
        appearance: none;
    }
    .selectIcon {
        position: absolute;
        bottom: 27px;
        right: 19px;
    }
`;
