import styled from 'styled-components/native';

import { IButtonProps } from '~/@types';

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.10,
  shadowRadius: 3.84,
  elevation: 5,
})``;

export const Button = styled.TouchableOpacity<IButtonProps>`
  background: #fff;
  margin-bottom: 20px;
  flex-direction: ${(props) => (props.flexDirection || 'column')};
  justify-content: ${(props) => (props.justifyContent || 'flex-start')};
  align-items: ${(props) => (props.alignItems || 'stretch')};
  padding: 10px;
  height: 70px;
  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-family: IBMPlexSans_600SemiBold;
`;

export const FooterText = styled.Text`
  font-family: IBMPlexSans_400Regular;
`;

export const EditButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const DeleteButton = styled.TouchableOpacity``;