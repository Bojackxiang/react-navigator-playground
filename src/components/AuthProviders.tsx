import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthProvider from './AuthProvider'
import Routes from '../Routes/Routes'

type AuthProvidersProps = {

}

const AuthProviders:React.FC<AuthProvidersProps> = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    )
}

export default AuthProviders


