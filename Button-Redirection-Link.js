import React from 'react';
import { View, Text, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';

const TouchnLink = () => {
  // write a function to open a link which accpets a link as paremeter
  function openWebsite(websiteLink: String){
    Linking.openURL(websiteLink)
  }
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Text style={styles.headerText}>Touch and Redirecting Link</Text>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>{
        openWebsite("https://malleshcn.netlify.app/")
      }}>
      <Text>Open Website</Text>
      </TouchableOpacity>
      <Button title="Hi Bro" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign:'center',
  },
  btnStyle:{
    width:125,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center',
    padding:12,
    borderRadius:12,
    marginBottom:8
  }
});

export default TouchnLink;



