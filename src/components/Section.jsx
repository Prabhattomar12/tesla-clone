import React from 'react';
import styled from 'styled-components';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <ButtonLeft>{leftBtnText}</ButtonLeft>
         { rightBtnText && <ButtonRight>{rightBtnText}</ButtonRight>}
        </ButtonGroup>

        <DropDownButton src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const ButtonGroup = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  @media (max-width: 768px){
      flex-direction: column;
  }

`;

const ButtonLeft = styled.div`
  background-color: #2b2b29;
  color: white;
  height: 40px;
  width: 250px;
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 10px;
  border-radius: 33px;
  opacity: 0.75;
  margin-right: 10px;
`;

const ButtonRight = styled(ButtonLeft)`
  color: black;
  background-color: white;
  margin-left: 20px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const DropDownButton = styled.img`
  margin-top: 20px;
  height: 40px;
  magin-bottom: 20px;
  animation: animateDown infinite 1.5s;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-item: space-between;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: gray;
`;
