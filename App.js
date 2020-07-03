import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import Header from './components/header'
import Todoitem from './components/todoitem'
import AddTodo from './components/addtodo'

export default function App() {
    const [todos, settodos] = useState([{text: 'arun', key: '1'}])

    const PressHandler = (key) => {
        settodos((prevtodos) => {
            return prevtodos.filter((todo) => todo.key != key)
        })
    }
    const submitHandler = (text) => {
        if (text.length > 3) {
            settodos((prevtodos) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevtodos,
                ]
            })
        } else {
            Alert.alert('OOPS!', 'todos must be atleast 3 letters long', [
                {text: 'understood', onPress: () => {}},
            ])
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.header}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.FlatList}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <Todoitem
                                    item={item}
                                    PressHandler={PressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.01)',
        flex: 1,
    },
    FlatList: {
        margin: 20,
        flex: 1,
    },
    header: {
        marginTop: 10,
        flex: 1,
    },
})
