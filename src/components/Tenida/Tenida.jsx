import { useEffect, useRef } from 'react'
import { elementObserver } from '../../utils'
import bgImage from '../../assets/img/bg.png'
import el2 from '../../assets/img/el_2.png'
import './Tenida.css'

function Tenida() {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['tenida_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className='tenida section_padding' ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className='header_emojis'>👔👗</h1>
        <h1 className='tenida_title section_title'>Vestimenta</h1>
        <h1 className='tenida_subtitle section_subtitle '>Elegante</h1>
        <img className='tenida_el2_top_left' src={el2} alt="tenida_el2_top_left" />
        <img className='tenida_el2_top_right' src={el2} alt="tenida_el2_top_right" />
        <img className='tenida_el2_bottom_left' src={el2} alt="tenida_el2_bottom_left" />
        <img className='tenida_el2_bottom_right' src={el2} alt="tenida_el2_bottom_right" />
    </section>
  )
}

export default Tenida
