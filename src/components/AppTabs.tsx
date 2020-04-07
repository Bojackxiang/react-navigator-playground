import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Text} from 'react-native'
import {AppParamList} from '../components/AppParams'
import Center from './Center'


interface AppTabsProps {

}

// see writing the navigator and the list as an template 
const Tabs = createBottomTabNavigator<AppParamList>() 

const AppTabs:React.FC<AppTabsProps> = ({}) => {
    return (
        // !since the navigation container is outside, so you dont need it here
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Search" component={Search}/>
            
        </Tabs.Navigator>
    )
}

export default AppTabs

const Home = () => {
    return <Center>
        <Text>Home</Text>
    </Center>
}

const Search = () => {
    return <Center>
        <Text>Search</Text>
    </Center>
}