import styled from 'styled-components/native';
import {height} from '~/constants/screen';

const controlledPadding = height >= 667 ? 30 : 25;

export const Wrapper = styled.View`
  justify-content: center;
  padding: ${controlledPadding}px 0 ${controlledPadding}px;
  align-items: center;
`;
export const Top = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  margin-left: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
