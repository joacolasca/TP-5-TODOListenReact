import { useState } from 'react';
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
            <button onClick={agregarToDo} className='botonAgregar'> Agregar To Do </button>
        </>
    )
   }

   if(tipo === "borrar"){     
    const borrarToDo = () => {
       setToDo(
        toDoList.filter(todo =>todo.id !== id)
       )
    }

    return(
        <>
            <button onClick={borrarToDo} className='borrar'> Borrar </button>
        </>
    );
    }
    
    if(tipo === "tareaRapida"){     
        const tareaRapida = () => {
            let map1 = toDoList.filter(element => element.tachado == true).map(element => {
                return {
                    ...element,
                    tiempoTardado: new Date(element.fechaTachado) - new Date(element.fechaCreado)
                }
            });

            if(map1.length > 0) {
                let minimo = map1.reduce((minimo, actual) => {
                    return actual.tiempoTardado < minimo.tiempoTardado ? actual : minimo;
                });
                
                setToDo(toDoList.map((item) => {
                    if (item.id === minimo.id) {
                        return {
                            ...item,
                            masRapido: true
                        }
                    }
                    if (item.id !== minimo.id && item.masRapido) {
                        return {
                            ...item,
                            masRapido: false
                        }
                    }
                    return item
                }))
            }
        }

        return(
            <>
                <button onClick={tareaRapida} className='botonRapida'> Tarea más rapida </button>
            </>
        );
    }
    return;
};

export default Boton;