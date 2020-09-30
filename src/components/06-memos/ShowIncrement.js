import React, {memo} from 'react'
import PropTypes from 'prop-types'

const ShowIncrement = memo(({increment}) => {
console.log('Me volvi a generar....')
  return (
    <button
      onClick={() => increment(5)}
      className='btn btn-primary'
    >
      increment
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}

export default ShowIncrement
