import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";
import { Dimensions, Button } from "react-native";

const TodoContainer = props => {
  return (
    <View style={styles.container}>
      <Button
        onPress={props.deleteTodos}
        title="Delete Finished"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {props.todoList.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} markComplete={props.markComplete} />
        );
      })}
    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#999",
    alignItems: "center",
    width: 307,
    // height: 1000,
    height: height * 0.8,
    // justifyContent: "center",
    borderWidth: 2,
    borderColor: "#999",
    borderRadius: 50
  },
  text: {
    color: "#a21455",
    fontSize: 80,
    textAlign: "center",
    lineHeight: 140
  }
});

export default TodoContainer;
