import Biblioteca from "./components/Biblioteca"
import MenuInicio from "./components/MenuInicio"
import Painel from "./components/Painel"
import Player from "./components/Player"


function App() {

  return (
    <div className="max-h-1">
      <MenuInicio />
      <Biblioteca />
      <Painel />
      <Player />
    </div>
  )
}

export default App
