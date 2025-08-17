import React, {useState} from 'react';
import type {PropsWithChildren} from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const shuffleableImgs=[
  "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/space-shuttle.png",
  "https://game-icons.net/icons/ffffff/000000/1x1/lorc/scales.png",
  "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/india-gate.png",
  "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/indian-palace.png",
  "https://game-icons.net/icons/ffffff/000000/1x1/skoll/glock.png",
  "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/missile-launcher.png",
]

// import header from '../assets/header.jpg'

const RollImgs = () => {
  const RollImages=({url})=>{
  return (
    <Image source={{uri:url}} style={styles.img} />
  )
}
  const [rolledImg, setRolledImg] = useState(shuffleableImgs[0])
  return (
    <View style={styles.container}>
      <RollImages url={rolledImg}/>
      <Button title="Shuffle" 
      onPress={() => {
        const randomImgID = Math.floor(Math.random()*shuffleableImgs.length)  
        setRolledImg(shuffleableImgs[randomImgID])
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
    marginVertical:12,
    borderRadius:12
    
  },
});

export default RollImgs;
