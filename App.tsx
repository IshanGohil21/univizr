/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,View,} from 'react-native';
import Login from './src/Auth/Login';
import AuthStackScreen from './Navigation/AuthStack';


const App: FC = () => {

  return (
    
    <View  style={styles.main}>
      <StatusBar />
        {/* <Login /> */}
        <AuthStackScreen />
      </View>

  
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1
  }
})


export default App;
