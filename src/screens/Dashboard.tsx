import React, { memo } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';
import { logOut } from '../firebase';
import { Calculator } from 'react-native-calculator'

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Header>Let’s calculate</Header>
        <Calculator width={300} height={300} />
    <Button mode="outlined" onPress={() => logOut(navigation)}>
      Logout
    </Button>
  </Background>
);



export default memo(Dashboard);
