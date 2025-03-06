// App.tsx
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createStore } from "tinybase";
import { Provider, useCreateStore } from "tinybase/ui-react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ClearTodos from "./components/ClearTodos";
import useAndStartPersister from "./components/useAndStartPersister";
import { styles } from "./components/styles";

const App: React.FC = () => {
  const store = useCreateStore(createStore);
  useAndStartPersister(store);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.heading}>TinyBase Example</Text>
          <NewTodo />
          <Todos />
          <ClearTodos />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
