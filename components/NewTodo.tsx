// components/NewTodo.tsx
import React, { useState } from "react";
import { TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import { useAddRowCallback } from "tinybase/ui-react";
import { styles } from "./styles";

const TODO_TABLE = "todo";
const TEXT_CELL = "text";
const DONE_CELL = "done";

const NewTodo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const handleSubmitEditing = useAddRowCallback(TODO_TABLE, (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const {
      nativeEvent: { text },
    } = event;
    setText("");
    return { [TEXT_CELL]: text, [DONE_CELL]: false };
  });

  return (
    <TextInput
      value={text}
      onChangeText={(newText: string) => setText(newText)}
      onSubmitEditing={handleSubmitEditing}
      placeholder="What do you want to do today?"
      style={styles.input}
    />
  );
};

export default NewTodo;
