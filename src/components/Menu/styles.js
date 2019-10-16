import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
})`
  flex: 1;
  width: 100%;
  opacity: 0;
`;
export const CodeWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: #fff;
`;

export const NavWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;
export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #fff;
`;
export const NavItemText = styled.Text`
  flex: 1;
  margin-left: 5px;
  font-size: 14px;
  color: #fff;
`;

export const NavButton = styled.TouchableOpacity`
  border: ${StyleSheet.hairlineWidth}px solid #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const NavButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
