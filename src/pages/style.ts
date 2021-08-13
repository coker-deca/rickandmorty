import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: "100%";
    background: "#e0f404";
    border: 1px solid green;
    padding: "0.5rem";

    .loader {
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: helvetica, arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: #ce4233;
  letter-spacing: 0.2em;
  
  &::before, &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: #ce4233;
    position: absolute;
    animation: load .7s infinite alternate ease-in-out;
  }
  
  &::before {
    top: 0;
  }
  
  &::after {
    bottom: 0;
  }
}

@keyframes load {
  0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
}
`;

export const Container = styled.div`
    background-color: purple;
    
    li {list-style: none;}
`;