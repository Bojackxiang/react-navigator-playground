import {StackNavigationProp,} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'

export type AppParamList =  {
    Home: undefined, 
    Search: undefined, 
    
}

export type HomeStackList =  {
    Feed: undefined, 
    Product: {
        name: string
    }
}

export type HomeNavProps<T extends keyof HomeStackList> = {
    navigation: StackNavigationProp<HomeStackList, T>;
    route: RouteProp<HomeStackList, T>;
  };