import React from 'react';
import './ToDo.css';
import Boton from '../boton/Boton'
const ToDo = ({ toDoList, setToDo }) => {
    console.log(toDoList)
    const marcarComoTachado = (id, checked) => {
        const index = toDoList.findIndex(td => td.id === id);
        const updatedToDoList = [...toDoList]; 
        updatedToDoList[index] = { 
            ...updatedToDoList[index],
            tachado: checked,
            fechaTachado: checked ? new Date().toLocaleString() : ""
        };
        setToDo(updatedToDoList);
    };
    return (
        <ul>
            {toDoList.map(td => (
                <li key={td.id} className={td.tachado ? 'completed' : ''}>
                    <input 
                        type="checkbox" 
                        onChange={() => marcarComoTachado(td.id, !td.tachado)} 
                        checked={td.tachado} 
                    />
                    {td.toDo} - Creado: {td.fechaCreacion} {td.tachado ? '- Completado: ' + td.fechaTachado : ''}
                    <Boton tipo = "borrar" toDoList={toDoList}setToDo={setToDo}id={td.id}></Boton>
                </li>
            ))}
        </ul>
    );
}

export default ToDo;