import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { SearchParamList } from './SearchParamList'
import Center from './Center'
import faker from 'faker'

type SearchStackProps = {

}

const Stack = createStackNavigator<SearchParamList>()


const SearchStack:React.FC<SearchStackProps> = ({}) => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search}/>
        </Stack.Navigator>
    )
}

const Search = (props: any) => {
    const {navigation} = props;
    const [show, setShow] = React.useState(false);
    return (
      <Center>
        <Button
        title="Search Products"
        onPress={() => {
          setShow(true);
        }}
      />
      {show ? (
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  navigation.navigate("Product", {
                    name: item
                  });
                }}
              />
            );
          }}
          keyExtractor={(product, idx) => product + idx}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      ) : null}
      </Center>
    );
  };


export default SearchStack


