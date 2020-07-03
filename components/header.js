import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function Header() {
    return (
        <View style={styles.Header}>
            <Text style={styles.title}>My Todo's 😘 🥰</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'rgba(234,24,65,30)',
        height: 60,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        textAlign: 'center',
    },
})
