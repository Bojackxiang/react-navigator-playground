import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'


export type AuthParamList = {
  Login: undefined;
  Register: undefined;
};
// It means the auth router will include the Login and the Register

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};


