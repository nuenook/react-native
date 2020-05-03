import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';

import ITodo from './ITodo'
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App: React.SFC = () => {

  const [todos, setTodos] = useState<ITodo[]>([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key: string) => {
    setTodos(prev => prev.filter(f => f.key !== key))
  }

  const renderItem = ({ item }: { item: ITodo }) => (
    <TodoItem item={item} deleteItem={pressHandler} />
  )

  const submitHandler = (text: string) => {
    setTodos(prev => [...prev, {text, key: Math.random().toString() }])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20
  }
})

export default App;