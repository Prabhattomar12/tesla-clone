import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section
        title='Medel S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
     
      <Section
        title='Medel 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Medel X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Medel Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
        <Section
        title='Lowest Cost Solar Pannel in America'
        description='Money-back gaurantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
        <Section
        title='Solar for New Roofs'
        description='Solar Roof cost Less Than New Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
        <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;
