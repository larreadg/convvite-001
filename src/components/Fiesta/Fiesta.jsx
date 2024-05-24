import { useEffect, useRef } from 'react'
import { elementObserver, redirectToGoogleMaps } from '../../utils'
import bgImage from '../../assets/img/bg2.png'
import './Fiesta.css'

function Fiesta() {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['fiesta_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className='fiesta section_padding' ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className='header_emojis'>🥳🎉</h1>
        <h1 className='fiesta_title section_title'>Fiesta</h1>
        <h1 className='fiesta_subtitle section_subtitle '>Sábado 01 de Junio, 20:00 hs. en el Salón Imperial Hotel Corona Suites</h1>
        <a className='fiesta_section_btn section_btn' onClick={() => redirectToGoogleMaps('https://goo.gl/maps/NeHccPUTr2879d2w9')}>
            <span className='icon'>📍</span>
            <p>Ver ubicación</p>
        </a>
    </section>
  )
}

export default Fiesta