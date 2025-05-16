import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio5({ navigation }) {
    const [capital, setCapital] = useState("");
    const [juros, setJuros] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [jurosSimpes, setJurosSimples] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput label='Informe o capital' keyboardType='numeric' value={capital} onChangeText={setCapital} />
            <TextInput label='Informe a taxa de juros' keyboardType='numeric' value={juros} onChangeText={setJuros} />
            <TextInput label='Informe o periodo' keyboardType='numeric' value={periodo} onChangeText={setPeriodo} />
            <Button onPress={() => { setJurosSimples(parseFloat(capital) * parseFloat(juros) * parseFloat(periodo)) }} mode='elevated'> Calcular Juros Simples </Button>
            <Text>Resultado: {jurosSimpes}</Text>
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
