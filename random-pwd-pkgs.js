//used yum for schema validation i.e. like zod in nextjs
//and bouncy checkbox package 
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const RandomPwdGen = () => {
  const pwds = Yup.object().shape({
    pwdLnt: Yup.number()
      .min(8, 'Must be 8 or more')
      .max(16, 'Max of 16')
      .required('Length is required'),
  });

  const [pwdLength, setPwdLength] = useState('');
  const [error, setError] = useState('');
  const [pwd, setPwd] = useState('');
  const [isPwdCreated, setIsPwdCreated] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const genPwdNow = async () => {
    try {
      await pwds.validate({ pwdLnt: Number(pwdLength) });
      setError('');
      let characterList = '';
      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const specialcharsss = '!@#$%^&*()_+';

      if (upper) characterList += upperCaseChars;
      if (lower) characterList += lowerCaseChars;
      if (number) characterList += numberChars;
      if (specialChars) characterList += specialcharsss;

      if (characterList === '') {
        alert('Please select at least one character type');
        return;
      }

      const getPwd = createActualPwd(characterList, Number(pwdLength));
      setPwd(getPwd);
      setIsPwdCreated(true);
    } catch (e) {
      setError(e.errors[0]);
    }
  };

  const createActualPwd = (characters, pwdLnt) => {
    let result = '';
    for (let i = 0; i < pwdLnt; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPwd = () => {
    setPwd('');
    setIsPwdCreated(false);
    setUpper(false);
    setLower(true);
    setNumber(false);
    setSpecialChars(false);
    setPwdLength('');
    setError('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Random Password Generator</Text>

      <TextInput placeholder="hii" maxLength="300000" multiline="true" 
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password length (8-16)"
        keyboardType="numeric"
        value={pwdLength}
        onChangeText={setPwdLength}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.checkbox}>
        <BouncyCheckbox
          isChecked={upper}
          onPress={() => setUpper(!upper)}
          text="Include Uppercase Letters"
        />
        <BouncyCheckbox
          isChecked={lower}
          onPress={() => setLower(!lower)}
          text="Include Lowercase Letters"
        />
        <BouncyCheckbox
          isChecked={number}
          onPress={() => setNumber(!number)}
          text="Include Numbers"
        />
        <BouncyCheckbox
          isChecked={specialChars}
          onPress={() => setSpecialChars(!specialChars)}
          text="Include Special Characters"
        />
      </View>

      <Button title="Generate Password" onPress={genPwdNow} />
      <View style={{ marginVertical: 8 }} />
      <Button title="Reset" color="red" onPress={resetPwd} />

      {isPwdCreated && (
        <Text style={styles.generatedPwd} selectable>Your Pwd: {pwd}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  checkbox: {
    marginVertical: 10,
  },
  generatedPwd: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});

export default RandomPwdGen;
