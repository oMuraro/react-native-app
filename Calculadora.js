import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Calculadora({navigation}) {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("")
  const [soma, setSoma] = useState("");

  const somar = () => {
    setSoma(parseFloat(valor1) + parseFloat(valor2));
    setValor1("");
    setValor2("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput label='Informe o Valor 1' keyboardType='numeric' value={valor1} onChangeText={setValor1} />
      <TextInput label='Informe o Valor 2' keyboardType='numeric' value={valor2} onChangeText={setValor2} />
      <Button onPress={somar} mode='elevated'> Calcular Soma </Button>
      <Text>Resultado: {soma}</Text>
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
