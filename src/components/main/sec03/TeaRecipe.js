import React, { useEffect, useState } from 'react';
import OriginalTea from './OriginalTea';
import MilkTea from './MilkTea';
import FruitTea from './FruitTea';
import styled from 'styled-components';

const selectRecipe = {
  OriginalTea,
  MilkTea,
  FruitTea,
};

const Button = styled.button`
  font-size: 15px;
  color: ${(props) => (props.active ? '#993b42' : '#9b8777')};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-color: #9b8777;
  background: none;
  font-weight: 700;
  padding: 0 0 6px;
  margin-right: 40px;
`;

const SelectButton = ({ handleClickButton, selectRecipe }) => {
  const [activeButton, setActiveButton] = useState(
    Object.keys(selectRecipe)[0]
  );

  const handleClick = (event, data) => {
    handleClickButton(event);
    setActiveButton(data);
  };

  return (
    <div className="btnWrap">
      {Object.keys(selectRecipe).map((data) => (
        <Button
          key={data}
          name={data}
          onClick={(event) => handleClick(event, data)}
          active={activeButton === data}
        >
          {data}
        </Button>
      ))}
    </div>
  );
};

function TeaRecipe() {
  const [recipe, setRecipe] = useState('OriginalTea');
  const [title, setTitle] = useState('OriginalTea');

  useEffect(() => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  }, [title]);

  const handleClickButton = (e) => {
    const { name } = e.target;
    setRecipe(name);
    setTitle(name);
  };

  return (
    <div className="inner">
      <h2 className="main_title">HOW TO ORDER</h2>
      <PTxt>나만의 조합으로 음료를 즐겨보세요</PTxt>
      <SelectButton
        handleClickButton={handleClickButton}
        selectRecipe={selectRecipe}
      />
      {recipe && (
        <div className="teaWrap">
          {React.createElement(selectRecipe[recipe])}
        </div>
      )}
    </div>
  );
}

const PTxt = styled.p`
  font-family: 'Mark Pro';
  font-size: 32px;
  font-weight: 900;
  line-height: 1.3;
  color: #000;
`;

export default TeaRecipe;
