import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, TabsWrapper, Tab, TabText} from './styles';
import Dots from '../Dots';

export default function ActionTabs() {
  return (
    <Wrapper>
      <TabsWrapper>
        <Tab>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </Tab>

        <Tab>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </Tab>

        <Tab>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </Tab>

        <Tab>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </Tab>

        <Tab>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </Tab>
      </TabsWrapper>
    </Wrapper>
  );
}
