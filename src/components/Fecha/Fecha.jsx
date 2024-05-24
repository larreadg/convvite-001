import { useEffect, useRef } from 'react'
import { elementObserver } from '../../utils'
import DownCounter from './DownCounter/DownCounter'
import bgImage from '../../assets/img/bg2.png'
import './Fecha.css'

function Fecha() {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['fecha_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className="fecha section_padding" ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className='header_emojis'>😎📅</h1>
      <h1 className='fecha_title section_title'>¡Ya falta poco!</h1>
      <h1 className='fecha_subtitle section_subtitle fecha_fecha'>• 01 de Junio de 2024 •</h1>
      <h1 className='fecha_subtitle section_subtitle fecha_ciudad'>Carapeguá</h1>
      <section className='downcounter_container'>
        <DownCounter fecha='2024-06-01' />
      </section>
    </section>
  )
}

export default Fecha