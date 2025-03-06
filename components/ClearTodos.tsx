// components/ClearTodos.tsx
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDelTableCallback, useHasTable } from "tinybase/ui-react";
import { styles } from "./styles";

const TODO_TABLE = "todo";

const ClearTodos: React.FC = () => {
  const handlePress = useDelTableCallback(TODO_TABLE);
  return useHasTable(TODO_TABLE) ? (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.clearTodos}>Clear all</Text>
    </TouchableOpacity>
  ) : null;
};

export default ClearTodos;
