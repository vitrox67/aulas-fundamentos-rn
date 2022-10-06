import React, { useState } from "react"
import { View, Text, Button, ScrollView, TextInput } from "react-native"
import { Tarefa } from "./Tarefa";

const ListadeTarefas = () => {
    const [titulo, setTitulo] = useState("Minha lista de tarefas");

    return (
        <View style={{ width: "80%", marginBottom: 60 }}>
            <Text>{titulo}</Text>
            <Tarefa descricao={"Uma descricao qualquer"} />
            <Button title="Alterar" onPress={() => setTitulo("Alterando minha lista")} />
        </View>
    )
}

export { ListadeTarefas }