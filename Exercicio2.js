import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio2({navigation}) {
  const [quilometros, setQuilometros] = useState("");
  const [milhas, setMilhas] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput label='Informe os Quilometros' keyboardType='numeric' value={quilometros} onChangeText={setQuilometros} />
      <Button onPress={() => setMilhas(parseFloat(quilometros) * 0.621371) } mode='elevated'> Calcular Milhas </Button>
      <Text>Resultado: { milhas }</Text>
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
