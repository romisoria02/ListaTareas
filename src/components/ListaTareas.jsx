import React from 'react';
import Items from './Items';
import ListGroup from 'react-bootstrap/ListGroup';


const ListaTareas = ({propsArregloTarea}) => {
    return (
       <ListGroup>
        {
          propsArregloTarea.map((tarea, posicion)=> <Items key={posicion} nombreTarea={tarea}></Items>)
        }
       
      </ListGroup>
       
    );
};

export default ListaTareas;