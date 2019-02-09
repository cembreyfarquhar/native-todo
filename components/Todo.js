import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeStyle: "none",
      complete: false
    };
  }

  render() {
    return (
      <View>
        <Text
          style={[
            styles.text,
            { textDecorationLine: this.state.completeStyle }
          ]}
          onPress={() => {
            this.state.completeStyle === "none"
              ? this.setState({ completeStyle: "line-through" })
              : this.setState({ completeStyle: "none" });
            this.props.markComplete(this.props.todo.id);
          }}
        >
          {this.props.todo.task}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 0,
  //     backgroundColor: "#a21455",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     width: width * 0.75,
  //     height: height * 0.3,
  //     borderWidth: 2,
  //     borderColor: "red",
  //     borderRadius: 50
  //   },
  text: {
    color: "#a21455",
    fontSize: 24,
    // textAlign: "",
    lineHeight: 40
  },
  input: {
    textAlign: "center"
  },
  haha: {
    color: "yellow"
  }
});

export default Todo;
