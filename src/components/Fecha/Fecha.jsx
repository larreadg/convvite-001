import DownCounter from '../DownCounter/DownCounter';
import './Fecha.css';

function Fecha() {
  return (
    <section className="fecha section_padding">
      <h1 className='header_emojis'>😎📅</h1>
      <h1 className='fecha_title section_title'>¡Ya falta poco!</h1>
      <h1 className='fecha_subtitle section_subtitle '>• 01 de Junio de 2024 •</h1>
      <h1 className='fecha_subtitle section_subtitle '>Carapeguá</h1>
      <DownCounter fecha='2024-06-01' />
    </section>
  );
}

export default Fecha;