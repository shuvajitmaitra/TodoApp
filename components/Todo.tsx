// components/Todo.tsx
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useRow, useSetCellCallback } from "tinybase/ui-react";
import { styles } from "./styles";

const TODO_TABLE = "todo";
const TEXT_CELL = "text";
const DONE_CELL = "done";
const NOT_DONE_ICON = String.fromCodePoint(0x1f7e0);
const DONE_ICON = String.fromCodePoint(0x2705);

interface TodoRow {
  [TEXT_CELL]: string;
  [DONE_CELL]: boolean;
}

interface TodoProps {
  id: string;
}

const Todo: React.FC<TodoProps> = ({ id }) => {
  const row = (useRow(TODO_TABLE, id) as unknown as TodoRow | undefined) || { [TEXT_CELL]: "", [DONE_CELL]: false };
  const { [TEXT_CELL]: text, [DONE_CELL]: done } = row;
  const handlePress = useSetCellCallback(TODO_TABLE, id, DONE_CELL, () => (prev: boolean) => !prev);
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.todo, done ? styles.done : null]}>
      <Text style={styles.todoText}>
        {done ? DONE_ICON : NOT_DONE_ICON} {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Todo;
