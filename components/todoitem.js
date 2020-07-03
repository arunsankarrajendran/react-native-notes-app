import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Todoitem({item, PressHandler}) {
    return (
        <TouchableOpacity onPress={() => PressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1.5,
        borderRadius: 10,
        color: 'black',
        fontSize: 18,
        backgroundColor: '#ddd',
        height: 60,
    },
})
