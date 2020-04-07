import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({ user: null, login: () => {}, logout: () => {} });

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const user = { username: "weijie" };
          setUser(user);
          AsyncStorage.setItem("user", JSON.stringify(user));
        },
        logout: () => {
          setUser(null)
          AsyncStorage.removeItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
