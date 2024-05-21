import './Tenida.css';
import el2 from '../../assets/img/el_2.png';

function Tenida() {
  return (
    <div className='tenida section_padding'>
        <h1 className='header_emojis'>👔👗</h1>
        <h1 className='tenida_title section_title'>Vestimenta</h1>
        <h1 className='tenida_subtitle section_subtitle '>Elegante</h1>
        <img className='tenida_el2_top_left' src={el2} alt="tenida_el2_top_left" />
    </div>
  );
}

export default Tenida;
