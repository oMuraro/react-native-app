import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio7({ navigation }) {
    const [dias, setDias] = useState("");
    const [horas, setHoras] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");
    

    const calcularTempo = () => {
        const diasAgora = dias
        const horasAgora = diasAgora * 24;
        const minutosAgora = horasAgora * 60;
        const segundosAgora = minutosAgora * 60;

        setHoras(parseFloat(horasAgora));
        setMinutos(parseFloat(minutosAgora));
        setSegundos(parseFloat(segundosAgora));
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput label='Informe os Dias' keyboardType='numeric' value={dias} onChangeText={setDias} />
            <Button onPress={calcularTempo} mode='elevated'> Calcular Tempo </Button>
            <Text>Horas: {horas}</Text>
            <Text>Minutos: {minutos} </Text>
            <Text>Segundos: {segundos} </Text>
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
