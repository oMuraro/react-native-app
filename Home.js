import react from "react";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
export default function Home({navigation}) {
    return (
        <SafeAreaView style={Styles.container}>
            <Text>Lista de Exercícios</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Calculadora')}> Abrir Calculadora </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio1')}> Abrir Exercício 1 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio2')}> Abrir Exercício 2 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio3')}> Abrir Exercício 3 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio4')}> Abrir Exercício 4 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio5')}> Abrir Exercício 5 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio6')}> Abrir Exercício 6 </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Exercicio7')}> Abrir Exercício 7 </Button>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});