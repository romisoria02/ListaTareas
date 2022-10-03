import Items from './Items';
import ListGroup from 'react-bootstrap/ListGroup';


const ListaTareas = ({propsArregloTarea, borrarTarea}) => {
    return (
       <ListGroup>
        {
          propsArregloTarea.map((tarea, posicion)=> <Items key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}>
          </Items> )
        }
       
      </ListGroup>
       
    );
};

export default ListaTareas;