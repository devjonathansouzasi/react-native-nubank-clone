import React from 'react';

import {Wrapper, Dot} from './styles';

export default function Dots({selectedIndex = 0}) {
  return (
    <Wrapper>
      <Dot selected={selectedIndex === 0} />
      <Dot selected={selectedIndex === 1} />
      <Dot selected={selectedIndex === 2} />
    </Wrapper>
  );
}
