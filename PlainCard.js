import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlainCard = () => {
  return (
    <View style={styles.headText}>
      <Text>PlainCards here</Text>
      <View style={styles.plainCardsBox}>
        <View style={[styles.justCard, styles.cardOne]}>
          <Text style={{color:"white"}}>Rohan</Text>
        </View>
        <View style={[styles.justCard, styles.cardTwo]}>
          <Text style={{color:"white"}}>Rohan</Text>
        </View>
        <View style={[styles.justCard, styles.cardThree]}>
          <Text style={{color:"white"}}>Rohan</Text>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plainCardsBox: {
    flexDirection:'row-reverse',
    paddingHorizontal:4
  },
  justCard: {
    width: 100,
    height: 100,
    margin:2,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  line:{
    width:'100%',
    height:2,
    backgroundColor:"black"
  }
});

export default PlainCard;
