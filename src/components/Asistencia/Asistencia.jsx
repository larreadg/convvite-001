import { useEffect, useState } from 'react';
import { MSG_ASISTENCIA_NO, MSG_ASISTENCIA_SI, URL_PLANILLA } from '../../constants';
import PropTypes from 'prop-types';
import './Asistencia.css';

function Asistencia({ jovenes, adultos, invitado }) {
    
    const [confirmacion, setConfirmacion] = useState(0);

    // Actualizar el local storage cada vez que confirmacion cambie
    useEffect(() => {
        const fetchConfirmacion = async () => {
            try {
                const response = await fetch(`${URL_PLANILLA}?query=select * from QnMC0JbaHZ4lV4Tk where Persona='${invitado}'`);
                const result = await response.json();
                const { data } = result
                if(data && Array.isArray(data) && data.length === 1){
                    setConfirmacion(data[0].Asistencia === 'Sí, asistiré' ? 1 : 2);
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
                const response = await fetch(URL_PLANILLA, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        Persona : invitado,
                        Asistencia : respuesta === 'SI' ? 'Sí, asistiré' : 'No asistiré',
                        Jovenes : jovenes,
                        Adultos : adultos
                     }),
                });

                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }

                setConfirmacion(respuesta === 'SI' ? 1 : 2);

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
