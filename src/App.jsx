import Fecha from './components/Fecha/Fecha'
import Fiesta from './components/Fiesta/Fiesta';
import MensajeInvitado from './components/MensajeInvitado/MensajeInvitado'
import Misa from './components/Misa/Misa';
import Portada from './components/Portada/Portada'
import Tenida from './components/Tenida/Tenida';
import Asistencia from './components/Asistencia/Asistencia';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const invitadoKey = queryParams.get('key');

  let jsonData = null
  try {
    jsonData = JSON.parse(decodeURIComponent(escape(atob(invitadoKey))));
  } catch(e){
    jsonData = {
      i : '',
      a : 0,
      j : 0
    };
  }

  return (
    <>
      <Portada />
      <Fecha />
      <MensajeInvitado invitado={jsonData.i} />
      <Misa />
      <Fiesta />
      <Tenida />
      <Asistencia jovenes={jsonData.j} adultos={jsonData.a} invitado={jsonData.i} />
    </>
  )
}

export default App
