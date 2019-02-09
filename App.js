import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import { Dimensions } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          task: "Give Katie a Kiss",
          completed: false
        }
      ],
      todoText: ""
    };
  }

  changeTodoText = text => {
    this.setState({
      todoText: text
    });
  };

  addNewTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          //id is randomly generated, poor temporary solution
          id: Math.floor(Math.random() * 1000),
          task: this.state.todoText
        }
      ]
    });
  };

  deleteTodos = () => {
    console.log("deleting!");
    // create new array without completed todos
    const todoList = this.state.todoList;
    const remainingTodos = todoList.filter(todo => !todo.completed);
    // replace state with unfinished todos
    this.setState({
      todoList: remainingTodos
    });
  };

  markComplete = id => {
    // task is set to the task being clicked
    const task = this.state.todoList.filter(todo => todo.id === id);
    // get index of task in todoList
    const index = this.state.todoList.indexOf(task[0]);
    // toggle completed status of task
    task[0].completed = !task[0].completed;
    // create new array with task added back into todoList
    const todoList = this.state.todoList;
    todoList[index] = task[0];
    // replace todoList in state with newly created array
    this.setState({
      todoList: todoList
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoForm
          style={styles.todoForm}
          changeTodoText={this.changeTodoText}
          todoText={this.state.todoText}
          addNewTodo={this.addNewTodo}
        />
        <TodoContainer
          todoList={this.state.todoList}
          deleteTodos={this.deleteTodos}
          markComplete={this.markComplete}
        />
      </View>
    );
  }
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 30
  },
  text: {
    color: "red",
    fontSize: 80,
    textAlign: "center",
    lineHeight: 140
  },
  todoForm: {}
});
