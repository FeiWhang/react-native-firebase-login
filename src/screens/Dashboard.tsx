import React, { memo } from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';
import { logOut } from '../firebase';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Firebase login register logout is amazing !!!
    </Paragraph>
    <Button mode="outlined" onPress={() => logOut(navigation)}>
      Logout
    </Button>
  </Background>
);



export default memo(Dashboard);
