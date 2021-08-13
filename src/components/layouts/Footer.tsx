import React from 'react';
import { Link } from 'react-router-dom';

import LogoUI from '../ui/logo';
import { FooterWrapper } from './style';

const Footer: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
    <FooterWrapper isMobile={isMobile}>
      <div className="row">
        <div className="column">
          <LogoUI />
        </div>
        <div className="column">
          <p>Resources</p>
          <Link to="/characters">Characters</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/episodes">Episodes</Link>
        </div>

        <div className="column">
          <p>Classifications</p>
          <Link to="/">Speies</Link>
        </div>
      </div>
      <div className="divider" />
      <div className="row">
        <p>Copyright © tosincoker26@gmail.com 2021. All rights reserved.</p>
      </div>
    </FooterWrapper>
);

export default Footer;
