import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio3({navigation}) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput label='Informe o peso' keyboardType='numeric' value={peso} onChangeText={setPeso} />
      <TextInput label='Informe a altura em metros' keyboardType='numeric' value={altura} onChangeText={setAltura} />
      <Button onPress={() => setIMC(parseFloat(peso) / (parseFloat(altura**2))) } mode='elevated'> Calcular IMC </Button>
      <Text>Resultado: { imc }</Text>
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
