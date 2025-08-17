import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const WAppContactUI = () => {
  const marvels = [
    {
      uniqId: '1009368',
      naam: 'Iron Man',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*KX_DOGlQZx2rE8a3',
      desc: "Tony Stark's armored superhero identity.",
    },
    {
      uniqId: 'TSARK1001',
      naam: 'Tony Stark',
      imageUrl:
        'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2024/09/06/45dbf58b-6f09-4b17-8f46-d9dd10020887_0e4c7241.jpg',
      desc: 'Genius inventor and creator of Iron Man.',
    },
    {
      uniqId: 'JARVISAI01',
      naam: 'JARVIS',
      imageUrl:
        'https://cdn.prod.website-files.com/5eb11e0c357695deedcd9cda/642315e96efb2c2104ffa5ea_1521812998053.jpg',
      desc: "Tony Stark's first AI assistant.",
    },
    {
      uniqId: 'FRIDAYAI01',
      naam: 'F.R.I.D.A.Y.',
      imageUrl:
        'https://repository-images.githubusercontent.com/400172588/07ba370e-616d-4e34-8931-8f42adbbb856',
      desc: "Tony's advanced female-voice AI.",
    },
    {
      uniqId: 'EDITHAI01',
      naam: 'E.D.I.T.H.',
      imageUrl: 'https://popcorngtm.com/hubfs/CRM%20HUD%20PGTM.gif',
      desc: "Even dead, I'm The Hero.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', color: 'white' }}>Contacts</Text>
      <ScrollView style={styles.scrollViewBro}>
        {marvels.map((item) => (
          <View style={styles.allContacts}>
            <Image style={styles.img} source={{ uri: item.imageUrl }} />
            <View style={styles.textContents}>
              <Text style={styles.naam}>{item.naam}</Text>
              <Text style={styles.desco}>{item.desc}</Text>
              {/*<Text>{item.uniqId}</Text>*/}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    margin: 2,
    padding: 2,
  },
  scrollViewBro: {},
  allContacts: { 
    alignItems:'start',
    padding: 4,
    margin:2,
    flexDirection:'row',
    backgroundColor:"#ff4456",
    borderRadius:6
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: '50%',
  },
  textContents: {
    paddingLeft:6
  },
  naam:{
    fontWeight:'bold',
    fontSize: 16,
  },
  desco:{
    fontSize:14
  }
});

export default WAppContactUI;
