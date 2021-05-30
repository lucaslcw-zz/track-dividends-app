import styled from 'styled-components/native';

export const Container = styled.View``;

export const Actions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
  padding-left: 15px;
  height: 50px;
  align-items: center;
`;

export const ShowButton = styled.TouchableOpacity``;

export const AddButton = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: IBMPlexSans_400Regular;
`;

export const Month = styled.Text`
  font-size: 16px;
  font-family: IBMPlexSans_500Medium;
`;

export const Value = styled.Text`
  font-size: 40px;
  margin-top: 5px;
  font-family: IBMPlexSans_600SemiBold;
`;
