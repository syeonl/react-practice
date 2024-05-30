import React, { useState } from 'react';
import CarouselContainer from 'components/carousel/CarouselContainer';
import { MenuData } from 'components/carousel/CarouselData';
import { BEST_DATA } from './BestMenuData';
import styled from 'styled-components';

import '../style.scss';

const BestMenu = () => {
  const [content, setContent] = useState();
  const [data, setData] = useState([]);

  const getData = (buttonId) => {
    switch (buttonId) {
      case 'first':
        return MenuData[0];
      case 'second':
        return MenuData[1];
      case 'third':
        return MenuData[2];
      default:
        return [];
    }
  };

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
    setData(getData(name));
  };

  console.log(content);

  return (
    <div className="inner">
      <h2 className="main_title">BEST MENU</h2>
      <BestM>
        {BEST_DATA.map((data) => {
          return (
            <Button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
      </BestM>
      {content && <CarouselContainer type={data} />}
    </div>
  );
};

export default BestMenu;

const BestM = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 20vh;
`;

const Button = styled.button`
  color: #111;
  background-color: unset;
  border: none;
  font-family: 'Mark Pro';
  font-size: 32px;
  font-weight: 800;
  margin: 20px 0;
`;
