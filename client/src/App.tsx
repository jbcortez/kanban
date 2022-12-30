import { Header } from "./Layout/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Session } from "@supabase/supabase-js";
import { DragDropContext } from "react-beautiful-dnd";
import Kanban from "./util/kanban";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ChakraProvider>
      <DragDropContext
        onDragEnd={(data) => Kanban.handleDragEnd(data, dispatch)}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </DragDropContext>
    </ChakraProvider>
  );
}

export default App;
