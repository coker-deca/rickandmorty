import React from 'react';
import { useHistory } from 'react-router';
import logo from "../../resources/images/logo.jpeg";

import { Logo, LogoImage, LogoText } from './style';

const LogoUI: React.FC = () => {
  const history = useHistory();
  return (
    <Logo onClick={() => history.push("/")}>
      <LogoImage>
        <img src={logo} alt="nav logo" />
      </LogoImage>
      <LogoText>
        <h3>Rick</h3>
        <span>and Morty</span>
      </LogoText>
    </Logo>
  );
};

export default LogoUI;
