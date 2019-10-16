import {Animated} from 'react-native';

import styled from 'styled-components/native';

import {width, height} from '~/constants/screen';

const controlledPadding = height >= 667 ? 20 : 10;

export const Wrapper = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  height: ${height * 0.5};
`;

export const CardsWrapper = styled.ScrollView``;

export const CardWrapper = styled.View`
  width: ${width * 0.9};
  margin: 0 20px;
  background-color: #fff;
  border-radius: 6px;
  justify-content: space-between;
`;

export const CardHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${controlledPadding}px 20px;
`;
export const CardHeaderText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  color: #666;
`;
export const CardContentWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
`;

export const CardContentText = styled.Text`
  font-size: 16px;
  color: #13b1c9;
  font-weight: 600;
`;
export const CardContentValue = styled.Text`
  font-size: ${height >= 667 ? 28 : 24}px;
  color: #13b1c9;
  font-weight: bold;
`;
export const CardContentBalanceWrapper = styled.View`
  flex-direction: ${height >= 667 ? 'row' : 'column'};
  margin-top: 6px;
`;
export const CardContentBalanceText = styled.Text`
  font-size: 14px;
  color: #111;
  margin-right: 10px;
`;
export const CardContentBalanceValue = styled.Text`
  font-size: 14px;
  color: #9cd132;
  font-weight: bold;
`;

export const CardFooterWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${height >= 667 ? 30 : 10}px 20px;
  background-color: #fafafa;
  height: 25%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const CardFooterText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  color: #333;
`;
