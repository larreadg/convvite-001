import { redirectToGoogleMaps } from '../../utils';
import './Misa.css';

function Misa() {
  return (
    <div className='misa section_padding'>
        <h1 className='header_emojis'>⛪✝️</h1>
        <h1 className='misa_title section_title'>Misa</h1>
        <h1 className='misa_subtitle section_subtitle '>Sábado 01 de Junio, 18:00 hs. en la Catedral Inmaculada Concepción de María</h1>
        <a className='misa_section_btn section_btn' onClick={() => redirectToGoogleMaps('https://maps.app.goo.gl/hKRnLkXHSf1TmRfZ7')}>
            <span className='icon'>📍</span>
            <p>Ver ubicación</p>
        </a>
    </div>
  );
}

export default Misa;