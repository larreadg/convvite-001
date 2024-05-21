import { useEffect, useState } from 'react';
import { MSG_ASISTENCIA_NO, MSG_ASISTENCIA_SI, URL_PLANILLA } from '../../constants';
import PropTypes from 'prop-types';
import './Asistencia.css';
import Loader from '../shared/Loader/Loader';

function Asistencia({ jovenes, adultos, invitado }) {
    
    const [confirmacion, setConfirmacion] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchConfirmacion = async () => {
            try {
                
                const response = await fetch(`${URL_PLANILLA}?Persona=${invitado}`);
                const result = await response.json();
                const { data } = result
                if(data){
                    setConfirmacion(data.Asistencia === 'Sí, asistiré' ? 1 : 2);
                }
            } catch (error) {
                console.error('Hubo un problema al obtener la confirmación: ' + error.message);
            }
        };
        fetchConfirmacion();
    }, [invitado]);


    const handleAsistenciaClick = async (respuesta) => {
        const msg = respuesta === 'SI' ? MSG_ASISTENCIA_SI : MSG_ASISTENCIA_NO
        const confirmed = window.confirm(msg);
        if (confirmed) {
            try {
                setLoading(true);
                const body = new FormData()
                body.append('Persona', invitado)
                body.append('Asistencia', respuesta === 'SI' ? 'Sí, asistiré' : 'No asistiré')
                body.append('Jovenes', jovenes)
                body.append('Adultos', adultos)

                const response = await fetch(URL_PLANILLA, {
                    method: 'POST',
                    body,
                });

                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }

                setConfirmacion(respuesta === 'SI' ? 1 : 2);

                setLoading(false);

            } catch (error) {
                alert('Hubo un problema al enviar la confirmación: ' + error.message);
            }
        }
    };    

    if (confirmacion === 1) {
        return (
            <section className='section_padding'>
                <h1 className='header_emojis'>😁✌️</h1>
                <h1 className='asistencia_title section_title'>Asistencia</h1>
                <h1 className='asistencia_subtitle section_subtitle '>Confirmada</h1>
            </section>
        );
    } else if (confirmacion === 2) {
        return (
            <section className='section_padding'>
                <h1 className='header_emojis'>😿👍</h1>
                <h1 className='asistencia_title section_title'>Asistencia</h1>
                <h1 className='asistencia_subtitle section_subtitle '>Has indicado que no podrás asistir</h1>
            </section>
        );
    }

    return (
        <div className='section_padding'>
            {loading && <Loader />}
            <h1 className='header_emojis'>✔️👌</h1>
            <h1 className='asistencia_title section_title'>Asistencia</h1>
            {jovenes > 0 && (
                <h1 className='asistencia_subtitle section_subtitle '>{jovenes} jóven(es)</h1>
            )}
            {adultos > 0 && (
                <h1 className='asistencia_subtitle section_subtitle '>{adultos} adulto(s)</h1>
            )}
            <a className='asistencia_section_btn section_btn' onClick={() => handleAsistenciaClick('SI')}>
                <span className='icon'>✔️</span>
                <p>Sí, asistiré</p>
            </a>
            <a className='asistencia_section_btn section_btn section_btn_secondary' onClick={() => handleAsistenciaClick('NO')}>
                <span className='icon'>❌</span>
                <p>No podré asistir</p>
            </a>
        </div>
    );
}

Asistencia.propTypes = {
    invitado: PropTypes.string.isRequired,
    jovenes: PropTypes.number.isRequired,
    adultos: PropTypes.number.isRequired,
};
export default Asistencia;
