import React from 'react';

import {Wrapper, Content} from './styles';

import Header from '~/components/Header';
import Cards from '~/components/Cards';
import ActionTabs from '~/components/ActionTabs';
import Dots from '~/components/Dots';
import Menu from '~/components/Menu';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Menu />
        <Cards />
      </Content>
      <Dots />
      <ActionTabs />
    </Wrapper>
  );
}
