import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dimensions } from "react-native";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }
  //this is its own function so that the textInput can be cleared 
  addNewTodo = () => {
    this.props.addNewTodo();
    this.textInput.clear();
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          //this ref allows the text to be cleared 
          ref={input => {
            this.textInput = input;
          }}
          onChangeText={text => this.props.changeTodoText(text)}
          placeholder="Type here"
          autoFocus={true}
          value={this.props.todoText}
          onSubmitEditing={this.addNewTodo}
        />
      </View>
    );
  }
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#a21455",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.75,
    height: height * 0.15,
    borderWidth: 2,
    borderColor: "#999",
    borderRadius: 50
  },
  text: {
    color: "red",
    fontSize: 80,
    textAlign: "center",
    lineHeight: 140
  },
  input: {
    textAlign: "center",
    fontSize: 36,
    opacity: 0.5
  }
});

export default TodoForm;
