import { redirectToGoogleMaps } from '../../utils';
import './Fiesta.css';

function Fiesta() {
  return (
    <div className='fiesta section_padding'>
        <h1 className='header_emojis'>🥳🎉</h1>
        <h1 className='fiesta_title section_title'>Fiesta</h1>
        <h1 className='fiesta_subtitle section_subtitle '>Sábado 01 de Junio, 20:00 hs. en el Salón Imperial Hotel Corona Suites</h1>
        <a className='fiesta_section_btn section_btn' onClick={() => redirectToGoogleMaps('https://goo.gl/maps/NeHccPUTr2879d2w9')}>
            <span className='icon'>📍</span>
            <p>Ver ubicación</p>
        </a>
    </div>
  );
}

export default Fiesta;