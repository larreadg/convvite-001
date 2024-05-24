import { useEffect, useRef } from 'react'
import { elementObserver, redirectToGoogleMaps } from '../../utils'
import bgImage from '../../assets/img/bg2.png'
import './Misa.css'

function Misa() {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['misa_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className='misa section_padding' ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className='header_emojis'>⛪✝️</h1>
        <h1 className='misa_title section_title misa_title'>Misa</h1>
        <h1 className='misa_subtitle section_subtitle '>Sábado 01 de Junio, 18:00 hs. en la Catedral Inmaculada Concepción de María</h1>
        <a className='misa_section_btn section_btn' onClick={() => redirectToGoogleMaps('https://maps.app.goo.gl/hKRnLkXHSf1TmRfZ7')}>
            <span className='icon'>📍</span>
            <p>Ver ubicación</p>
        </a>
    </section>
  )
}

export default Misa