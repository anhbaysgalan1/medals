import React from 'react'
import {Link} from 'react-router-dom'

const EvalLink = () => {
  return (
    <div className='eval-link'>
      <Link to='/eval'>Eval(me)</Link>
    </div>
  )
}

export default EvalLink
