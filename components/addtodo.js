import React, {useState} from 'react'
import {
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
    View,
    TouchableOpacity,
} from 'react-native'

export default function AddTodo({submitHandler}) {
    const [text, usetext] = useState('')
    const changehandler = (val) => {
        usetext(val)
    }
    const AppButton = () => (
        <TouchableOpacity
            onPress={() => submitHandler(text)}
            style={styles.Button}>
            <Text style={styles.buttontext}>Add todo</Text>
        </TouchableOpacity>
    )

    return (
        <KeyboardAvoidingView>
            <TextInput
                style={styles.text}
                placeholder="new to do.."
                onChangeText={changehandler}
                placeholderTextColor="rgba(0,0,0,0.5)"
            />
            <AppButton />
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 20,
        fontSize: 20,
        backgroundColor: '#ddd',
    },
    con: {
        width: 120,
        marginHorizontal: 140,
    },

    Button: {
        elevation: 20,
        backgroundColor: '#0084FF',
        height: 45,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 130,
    },
    buttontext: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})
