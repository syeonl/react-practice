import { useState, useEffect } from 'react';
import './Header.scss';
import '../common.scss';
import Categories from '../nav/Categories';
import styled from 'styled-components';
import ThemeModeButton from 'context/ThemeModeButton';

const Header = styled.header`
  height: ${(props) => (props.isHovered ? '400px' : '100px')};
  background-color: ${(props) =>
    props.isHovered || props.isScrolled ? 'white' : 'initial'};
  transition: background-color 0.3s ease-out, background-color 0.3s ease-out;
  .inner {
    align-items: ${(props) =>
      props.isHovered || props.isScrolled ? 'flex-start' : 'center'};
    .logo {
      padding: ${(props) =>
        props.isHovered || props.isScrolled ? '7px 0' : '0'};
    }
  }
  .btn_lang span {
    color: ${(props) =>
      props.isHovered || props.isScrolled ? 'black' : 'white'};
  }
`;

const HeaderComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScrollTop = () => {
    if (!isScrolled && window.scrollY > 100) {
      setIsScrolled(true);
    } else if (isScrolled && window.scrollY <= 100) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  });

  return (
    <Header
      isHovered={isHovered}
      isScrolled={isScrolled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inner">
        <a href="https://www.gong-cha.co.kr/brand/">
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="로고 공차 이미지"
          />
        </a>
        <Categories isHovered={isHovered} isScrolled={isScrolled} />
        <div>
          <ThemeModeButton />
          <button type="button" className="btn_dark" onClick={ontoggle}>
            <span>dark mode</span>
          </button>
          <button type="button" className="btn_allmenu"></button>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
