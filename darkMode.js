//First file in app.js for darkMode
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

function App() :JSX.Element{
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaView>
      <View style={ss.container}>
        <Text style={isDarkMode ? ss.blacTextSyle : ss.whitTextSyle}>Hello World!!</Text>
        <Text style={isDarkMode ? ss.blacTextSyle : ss.whitTextSyle}>useColorScheme is a react Hook, which has subscribed to Appearance module which will provide the data of userpreferences and the same will be updated conditionally using the hooks in the code!!</Text>
      </View>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  blacTextSyle:{
    color: "#ff0000"
  },
  whitTextSyle:{
    color: "blue"
  }
})
export default App;
