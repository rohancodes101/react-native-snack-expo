import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageCard = () => {
  return (
    <View style={{paddingHorizontal:4,}}>
      <Text  style={styles.headText}>Image Card</Text>
      <View style={styles.mainCard}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrWsGHdzldLeNp5qPMa80B_jiYzDpXxSZHg&s',
          }}
          style={styles.imageStyle}></Image>
          <View style={styles.allTexts}>
          <Text style={styles.name}>Tony Stark</Text>
          <Text style={styles.age}>42</Text>
          <Text style={styles.desc}>Genius Billioanire Playboy Philanthropist</Text>
          </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    fontSize:12,
    fontWeight:'bold'
  },
  mainCard:{
    backgroundColor:"grey",
    borderRadius:12,
  },
  imageStyle: {
    borderRadius:18,
    height: 150,
    width: 200,
  },
  allTexts:{
    
    marginBottom:24,
    paddingHorizontal:24,
  },
  name:{
    color:"white",
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold'
  },
  age:{
    color:"white",
    textAlign:'center',
    fontSize:18,
  },
  desc:{
    color:"white",
    textAlign:'center',
    fontSize:16,
  },
});

export default ImageCard;
