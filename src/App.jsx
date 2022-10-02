import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTareas from "./components/FormularioTareas";


function App() {
  return (
<Container className='my-5'>
  <h1 className='display-2 text-center'>Bienvenidos</h1>
  <p className='display-5 text-center'>Ingresa tus tareas</p>
       
    <FormularioTareas></FormularioTareas>
  </Container>

  );
}

export default App;
