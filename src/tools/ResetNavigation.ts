import { CommonActions } from '@react-navigation/native';

export const resetStackNavigation = (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'TabNavigatorRoutes' }]
    })
  );
}