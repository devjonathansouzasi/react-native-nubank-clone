import styled from 'styled-components/native';
import {height} from '~/constants/screen';

export const Wrapper = styled.View`
  height: ${height >= 667 ? 100 : 80}px;
  margin-top: ${height >= 667 ? 20 : 10}px;
  margin-bottom: 20px;
`;

export const TabsWrapper = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;
export const Tab = styled.TouchableOpacity`
  justify-content: space-between;
  width: ${height >= 667 ? 95 : 80}px;
  height: ${height >= 667 ? 100 : 80}px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
`;
export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
