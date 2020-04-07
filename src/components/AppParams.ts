import {StackNavigationProp,} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'

export type AppParamList =  {
    Home: undefined, 
    Search: undefined, 
    
}

// the name of the screen, and what will rbe the params to be parse into the screen
export type HomeStackList =  {
    Feed: undefined, 
    Product: {
        name: string
    },
    Edit: {
        name: string
    },
}

export type HomeNavProps<T extends keyof HomeStackList> = {
    navigation: StackNavigationProp<HomeStackList, T>;
    route: RouteProp<HomeStackList, T>;
  };