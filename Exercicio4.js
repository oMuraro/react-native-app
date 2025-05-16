import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio4({ navigation }) {
    const [preco, setPreco] = useState("");
    const [porcentagem, setPorcentagem] = useState("");
    const [total, setTotal] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput label='Informe o preço' keyboardType='numeric' value={preco} onChangeText={setPreco} />
            <TextInput label='Informe o percentual' keyboardType='numeric' value={porcentagem} onChangeText={setPorcentagem} />
            <Button onPress={() => { setTotal((parseFloat(preco) * parseFloat(porcentagem)) / 100) }} mode='elevated'> Calcular Desconto </Button>
            <Text>Resultado: {preco - total}</Text>
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
