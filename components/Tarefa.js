import React from "react"
import {View,Text} from "react-native"

const Tarefa = (props)=>{
    return(
        <View>
            <Text>{props.descricao}</Text>
        </View>
    )
}
export {Tarefa}