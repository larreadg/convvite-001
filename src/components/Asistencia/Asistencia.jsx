import './Asistencia.css';
import PropTypes from 'prop-types';

function Asistencia({ jovenes, adultos }) {
  return (
    <div className='asistencia section_padding'>
        <h1 className='header_emojis'>✔️👌</h1>
        <h1 className='asistencia_title section_title'>Asistencia</h1>
        { jovenes > 0 && 
            <h1 className='asistencia_subtitle section_subtitle '>{jovenes} jóven(es)</h1>
        } 
        { adultos > 0 &&
            <h1 className='asistencia_subtitle section_subtitle '>{adultos} adulto(s)</h1>
        }
        <a className='asistencia_section_btn section_btn'>
            <span className='icon'>✔️</span>
            <p>Sí, asistiré</p>
        </a>
        <a className='asistencia_section_btn section_btn section_btn_secondary'>
            <span className='icon'>❌</span>
            <p>No podré asistir</p>
        </a>
    </div>
  );
}

Asistencia.propTypes = {
    jovenes: PropTypes.number.isRequired,
    adultos: PropTypes.number.isRequired,
};
export default Asistencia;
