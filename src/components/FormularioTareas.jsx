import { Button,Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ListaTarea from './ListaTareas';

const FormularioTareas = () => {
    const tareaLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];

    const [tarea, setTarea] = useState('');
    const [arregloTarea,setArregloTarea] = useState(tareaLocalStorage);

    useEffect(()=>{
            localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea))
    },[arregloTarea])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setArregloTarea([...arregloTarea, tarea])
        setTarea('');

    };
    const borrarTarea =(nombre)=>{
        let arregloModificado = arregloTarea.filter((itemTarea)=>(itemTarea !== nombre))
        setArregloTarea(arregloModificado)

    }
  
    return (
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>

        <Button variant="primary" type="submit"> Enviar </Button>
        </Form.Group>
      </Form>
        <ListaTarea propsArregloTarea={arregloTarea}borrarTarea={borrarTarea}></ListaTarea>
        </div>
    );
};

export default FormularioTareas;