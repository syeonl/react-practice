import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Top = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;
const BtnTop = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: #000;
  color: #fff;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &&hover {
    color: rgb(142, 26, 26);
  }
`;

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const ScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <Top>
        <BtnTop id="top" onClick={ScrollTop} type="button">
          {' '}
          Top
        </BtnTop>
      </Top>
    )
  );
}

export default TopButton;
