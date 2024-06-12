import './Input.css';
const Input = ({toDo, setTD }) => {
    
    const guardarToDo=(e)=>{
        setTD(e.target.value)
    }
    return(
        <>
            <input onKeyUp={guardarToDo} className='IngresarToDo'></input>
        </>
    );
};

export default Input;