import { Button,Form } from 'react-bootstrap';
import React from 'react';
import ListaTarea from './ListaTareas';

const FormularioTareas = () => {
    return (
        <div>
        <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ingresa una tarea" />
        <Button variant="primary" type="submit"> Enviar </Button>
        </Form.Group>
      </Form>
        <ListaTarea></ListaTarea>
        </div>
    );
};

export default FormularioTareas;