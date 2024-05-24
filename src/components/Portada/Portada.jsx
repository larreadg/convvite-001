import { useEffect, useRef } from 'react'
import { elementObserver } from '../../utils'
import el1 from '../../assets/img/el_1.png'
import el2 from '../../assets/img/el_2.png'
import el3 from '../../assets/img/el_3.png'
import el4 from '../../assets/img/el_4.png'
import el5 from '../../assets/img/el_5.png'
import bgImage from '../../assets/img/bg.png'
import './Portada.css'

function Portada() {

  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = elementObserver(['portada_animate'])
    observer.observe(ref.current)
    return () => {
      currentRef.current && observer.unobserve(currentRef.current)
    }
  })

  return (
    <section className='portada' ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className='portada_xv'>Mis XV</h1>
      <h1 className='portada_titulo'>Melissa</h1>
      <img className='portada_el1_top' src={el1} alt="portada_el1_top" />
      <img className='portada_el1_bottom' src={el1} alt="portada_el1_bottom" />
      <img className='portada_el2_top_left' src={el2} alt="portada_el2_top_left" />
      <img className='portada_el2_top_right' src={el2} alt="portada_el2_top_right" />
      <img className='portada_el2_bottom_left' src={el2} alt="portada_el2_bottom_left" />
      <img className='portada_el2_bottom_right' src={el2} alt="portada_el2_bottom_right" />
      <img className='portada_el3' src={el3} alt="portada_el3" />
      <img className='portada_el4' src={el4} alt="portada_el4" />
      <section className='portada_el5_container'>
        <img className='portada_el5' src={el5} alt="portada_el5" />
      </section>
      <section className='portada_el5_container_right'>
        <img className='portada_el5_right' src={el5} alt="portada_el5_right" />
      </section>
    </section>
  )
}

export default Portada
