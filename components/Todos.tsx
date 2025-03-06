// components/Todos.tsx
import React from "react";
import { FlatList } from "react-native";
import { useSortedRowIds } from "tinybase/ui-react";
import Todo from "./Todo";
import { styles } from "./styles";

const TODO_TABLE = "todo";
const DONE_CELL = "done";

const Todos: React.FC = () => {
  const sortedIds = useSortedRowIds(TODO_TABLE, DONE_CELL);
  const renderItem = ({ item: id }: { item: string }) => <Todo id={id} />;

  return <FlatList data={sortedIds} renderItem={renderItem} style={styles.todos} />;
};

export default Todos;
