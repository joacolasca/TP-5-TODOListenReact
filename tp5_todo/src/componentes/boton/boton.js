import './Boton.css';
const Boton = ({ tipo, toDoList,setToDo,toDo="",id=0}) => {
   if(tipo === "agregarToDo"){
    const agregarToDo =()=>{
        setToDo([
            ...toDoList,
            {
                id: Date.now(),
                toDo: toDo,
                tachado: false,
                fechaCreacion: new Date().toLocaleString(),
                fechaTachado: ""
            }
        ])
       }
    return(
        <>
        <button onClick={agregarToDo}> Agregar To Do </button>
        </>
    )
   }
   if(tipo === "borrar")
    {     
    const borrarToDo = () => {
       setToDo(
        toDoList.filter(todo =>todo.id !== id)
       )
    }
        return(
            <>
             <button onClick={borrarToDo}> Borrar </button>
            </>
        );
    } 
return;
};

export default Boton;