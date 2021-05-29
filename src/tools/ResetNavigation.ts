import { CommonActions } from '@react-navigation/native';

export const resetStackNavigation = (navigation: any, routeName: string) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName }]
    })
  );
}