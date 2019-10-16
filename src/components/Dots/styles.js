import styled from 'styled-components/native';
import {height} from '~/constants/screen';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: ${height >= 667 ? 20 : 10}px;
`;
export const Dot = styled.View.attrs(props => ({
  backgroundColor: props.selected ? '#fff' : '#eee',
  opacity: props.selected ? 1 : 0.5,
  width: props.selected ? 10 : 8,
  height: props.selected ? 10 : 8,
  borderRadius: props.selected ? 5 : 4,
}))`
  margin: 0 3px;
`;
