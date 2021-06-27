import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/carSlice';

function Header() {

  const [ burgerNavOpen, setBurgerNavOpen ] = useState(false);
  const cars = useSelector(selectCars);

    return (
    <Container>
      <a href=''>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <p>
          <a href='#'>model s</a>
        </p>
        <p>
          <a href='#'>model 3</a>
        </p>
        <p>
          <a href='#'>model x</a>
        </p>
        <p>
          <a href='#'>model y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href='#'>shop</a>
        <a href='#'>tesla account</a>
        <MenuIcon className='menu_icon' onClick={() => setBurgerNavOpen(true)} />
      </RightMenu>

     { burgerNavOpen &&  <BurgerNav>
          <CloseWrapper>
              <CloseBtn onClick={() => setBurgerNavOpen(false)} />
          </CloseWrapper>
     
        {cars.map(car => <li><a>{car}</a></li>)}
     
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'></a>Roadaster
        </li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Power</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
        
      </BurgerNav> }
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;

  p {
    text-transform: uppercase;
    font-weight: 500;
    flex-wrap: nowrap;
    padding: 0px 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-item: center;

  a {
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16; 
    display: flex;
    flex-direction: column;
    align-item: center;
    overflow-y: scroll;

    li {
        padding: 10px 20px;
        border-bottom: 1px solid gray;
    }
`;

const CloseBtn = styled(CloseIcon)`
        padding: 5px;
        cursor: pointer;
`;

const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   
`;