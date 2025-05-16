import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio1({navigation}) {
  const [metros, setMetros] = useState("");
  const [centimetros, setCentimetros] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput label='Informe os Metros' keyboardType='numeric' value={metros} onChangeText={setMetros} />
      <Button onPress={() => setCentimetros(parseFloat(metros) * 100) } mode='elevated'> Calcular Centimetros </Button>
      <Text>Resultado: { centimetros }</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>Voltar</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
