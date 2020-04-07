import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// the interface for the component props
interface CenterProps {

}


const Center:React.FC<CenterProps> = ({children}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            {children}            
        </View>
    )
}

export default Center

const styles = StyleSheet.create({})
