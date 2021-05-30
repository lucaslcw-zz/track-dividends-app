import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Wrapper = styled(Animated.View).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.10,
  shadowRadius: 3.84,
  elevation: 5,
})`
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  z-index: 101;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  background: #fff;
`;

export const Icon = styled.View`
  width: 30px;
  margin-right: 5px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: IBMPlexSans_400Regular;
`;
