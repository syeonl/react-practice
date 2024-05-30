import styled from 'styled-components';

const SelectButton = ({ handleClickButton, selectRecipe }) => {
  return (
    <div className="btnWrap">
      {Object.keys(selectRecipe).map((data) => (
        <Button key={data} name={data} onClick={handleClickButton}>
          {data}
        </Button>
      ))}
    </div>
  );
};

const Button = styled.button`
  font-size: 15px;
  color: #9b8777;
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
//active #993b42
export default SelectButton;
