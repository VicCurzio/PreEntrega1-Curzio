import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/ItemListContainer/NavBar/NavBar'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={"Próximamente"} />
    </div>
  )
}

export default App