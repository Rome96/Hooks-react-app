import React, {useEffect} from 'react'

const Menssage = () => {

  useEffect(() => {
     
    const mouseMove = e => {
      console.log(':D')
    }
    
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h3>Eres genial</h3>
    </>
  )
};

export default Menssage

