import './App.css';
import Boton from './componentes/boton/Boton'
import { useState } from 'react';
import Input from './componentes/input/Input';
import ToDo from './componentes/toDo/ToDo';
function App() {
  const [toDo,setTD]=useState();
  const [toDoList,setToDo] = useState([]);
  return(
    <>
      <div className='controlador'>
        <Boton tipo={"agregarToDo"} toDoList={toDoList} setToDo={setToDo} toDo = {toDo}> </Boton>
        <Input toDo={toDo} setTD = {setTD}></Input>
        <Boton tipo={"tareaRapida"} toDoList={toDoList} setToDo={setToDo} toDo = {toDo}></Boton>
      </div>
      <ToDo toDoList={toDoList} setToDo={setToDo} />
    </>
  ) ;
}
export default App;
