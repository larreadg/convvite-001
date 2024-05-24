import { useEffect, useRef } from 'react';
import { elementObserver } from '../../utils';
import el2 from '../../assets/img/el_2.png';
import bgImage from '../../assets/img/bg.png'
import PropTypes from 'prop-types';
import './MensajeInvitado.css';

function MensajeInvitado({ invitado }) {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['mensaje_invitado_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className='mensaje_invitado section_padding' ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className='header_emojis'>❤️💬</h1>
        <h1 className='mensaje_invitado_title section_title invitado_title'>{invitado}</h1>
        <h1 className='mensaje_invitado_subtitle section_subtitle'>Hay momentos que no se pueden borrar, personas que no se pueden olvidar y recuerdos como éste que siempre voy a atesorar. <br />Porque son parte de mi vida... <br />Porque llenaron de felicidad mis días... <br />Y tornaron aquellos instantes de tristeza en alegrías... <br />Deseo que compartas conmigo la mágica noche de Mis 15 años.</h1>
        <img className='mensaje_invitado_el2_top_left' src={el2} alt="mensaje_invitado_el2_top_left" />
        <img className='mensaje_invitado_el2_top_right' src={el2} alt="mensaje_invitado_el2_top_right" />
        <img className='mensaje_invitado_el2_bottom_left' src={el2} alt="mensaje_invitado_el2_bottom_left" />
        <img className='mensaje_invitado_el2_bottom_right' src={el2} alt="mensaje_invitado_el2_bottom_right" />
    </section>
  );
}

MensajeInvitado.propTypes = {
    invitado: PropTypes.string.isRequired,
};
export default MensajeInvitado;
