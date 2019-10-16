import React from 'react';

import QRCode from 'react-qr-code';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  CodeWrapper,
  NavWrapper,
  NavItem,
  NavItemText,
  NavButton,
  NavButtonText,
} from './styles';

export default function Menu() {
  return (
    <Wrapper>
      <CodeWrapper>
        <QRCode
          value="https://github.com/devjonathansouzasi"
          size={95}
          fgColor="#333"
        />
      </CodeWrapper>
      <NavWrapper>
        <NavItem>
          <Icon name="help-outline" size={30} color="#fff" />
          <NavItemText>Me ajuda</NavItemText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={30} color="#fff" />
          <NavItemText>Perfil</NavItemText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </NavItem>
        <NavItem>
          <Icon name="attach-money" size={30} color="#fff" />
          <NavItemText>Configurar NuConta</NavItemText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={30} color="#fff" />
          <NavItemText>Configurar Cartão</NavItemText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </NavItem>
        <NavItem>
          <Icon name="stay-current-portrait" size={30} color="#fff" />
          <NavItemText>Configurações do app</NavItemText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </NavItem>
        <NavButton>
          <NavButtonText>Sair do app</NavButtonText>
        </NavButton>
      </NavWrapper>
    </Wrapper>
  );
}
