// components/useAndStartPersister.ts
import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite";
import { useCreatePersister } from "tinybase/ui-react";
import { createStore } from "tinybase";

const useAndStartPersister = (store: ReturnType<typeof createStore>) => {
  useCreatePersister(
    store,
    (store) =>
      Platform.OS === "web" ? createLocalPersister(store, "todos") : createExpoSqlitePersister(store, SQLite.openDatabaseSync("todos.db")),
    [],
    async (persister) => {
      await persister.load();
      await persister.startAutoSave();
    }
  );
};

export default useAndStartPersister;
