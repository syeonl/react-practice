import { useState, useEffect } from 'react';
import './Header.scss';
import '../common.scss';
import Categories from '../nav/Categories';
import styled from 'styled-components';

const Headert = styled.header.withConfig({
  shouldForwardProp: (prop) => !['isHovered', 'isScrolled'].includes(prop),
})`
  height: ${(props) => (props.isHovered ? '400px' : '100px')};
  background-color: ${(props) =>
    props.isHovered || props.isScrolled ? 'white' : 'initial'};
  transition: background-color 0.3s ease-out, background-color 0.3s ease-out;
  .inner {
    display: flex;
    align-items: ${(props) =>
      props.isHovered || props.isScrolled ? 'flex-start' : 'center'};
    .logo {
      padding: ${(props) =>
        props.isHovered || props.isScrolled ? '7px 0' : '0'};
    }
  }
`;

const Header = () => {
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
  }, [isScrolled]);

  return (
    <Headert
      isHovered={isHovered}
      isScrolled={isScrolled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inner">
        <a href="https://www.gong-cha.co.kr/brand/" className="logo">
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="로고 공차 이미지"
          />
        </a>
        <Categories isHovered={isHovered} isScrolled={isScrolled} />
        <div>
          <button type="button" className="btn_allmenu"></button>
        </div>
      </div>
    </Headert>
  );
};

export default Header;
