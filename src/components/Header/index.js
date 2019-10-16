import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Top, Logo, Title} from './styles';

import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Wrapper>
      <Top>
        <Logo source={logo} />
        <Title>Jonathan Souza</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Wrapper>
  );
}
