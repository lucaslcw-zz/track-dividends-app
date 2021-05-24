import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #F7F7F7;
`;

export const Title = styled.Text``;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 15
})`
  flex: 1;
`;