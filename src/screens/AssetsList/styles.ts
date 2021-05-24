import styled from 'styled-components/native';

export const Container = styled.View`
  background: #F7F7F7;
  flex: 1;
`;

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background: #F7F7F7;
`;

export const Actions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 15px;
  padding-left: 15px;
  height: 50px;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity``;

export const InputContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.10,
  shadowRadius: 3.84,
  elevation: 5,
})`
  height: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 25px;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  flex: 1;
  height: 100%;
  font-size: 16px;
  font-family: IBMPlexSans_400Regular;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 25px;
`;

export const Header = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: IBMPlexSans_600SemiBold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  paddingLeft: 15,
  paddingRight: 15,
})``;