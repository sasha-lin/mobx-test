import Counter from "./Counter"
import Apple from "./Apples/AppleBasket"
import TodoContainer from "./Todos/Container"
import { RootStoreProvider } from "../store"

function App() {
  return (
    <RootStoreProvider>
      <TodoContainer />
      <Apple/>
      <Counter />
    </RootStoreProvider>
  )
}

export default App
