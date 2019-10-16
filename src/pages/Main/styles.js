import styled from 'styled-components/native';
import {height} from '~/constants/screen';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #873490;
`;

export const Content = styled.View`
  height: ${height * 0.5};
  z-index: 5;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
