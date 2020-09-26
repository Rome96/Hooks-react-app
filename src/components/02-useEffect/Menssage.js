import React, {useEffect} from 'react'

const Menssage = () => {

  useEffect(() => {
    console.log('Se montó el componente')
    return () => {
      console.log('Se desmontó el componente')
    }
  }, [])

  return (
    <>
      <h3>Eres genial</h3>
    </>
  )
};

export default Menssage

