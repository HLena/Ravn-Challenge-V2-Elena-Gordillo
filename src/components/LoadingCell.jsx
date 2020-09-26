import React from 'react'
import Spinner from './Spinner'


export const LoadingCell = () => (
    <span className="center text">
      <Spinner/>
      Loading
    </span>
  )

export default LoadingCell;
