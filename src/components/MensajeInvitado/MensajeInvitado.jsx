import './MensajeInvitado.css';
import PropTypes from 'prop-types';

function MensajeInvitado({ invitado }) {
  return (
    <div className='mensaje_invitado section_padding'>
        <h1 className='header_emojis'>❤️💬</h1>
        <h1 className='mensaje_invitado_title section_title'>{invitado}</h1>
        <h1 className='mensaje_invitado_subtitle section_subtitle '>
            Hay momentos que no se pueden borrar, personas que no se pueden olvidar y 
            recuerdos como éste que siempre voy a atesorar. <br />
            Porque son parte de mi vida... <br />
            Porque llenaron de felicidad mis días... <br />
            Y tornaron aquellos instantes de tristeza en alegrías... <br />
            Deseo que compartas conmigo la mágica noche de Mis 15 años.
        </h1>
    </div>
  );
}

MensajeInvitado.propTypes = {
    invitado: PropTypes.string.isRequired,
};
export default MensajeInvitado;
