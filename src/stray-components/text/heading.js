import React from 'react'
import text from './text.modules.css'

export const Heading = ({ tag, children, reset }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={reset ? text.headingReset : null}>{children}</h1>

    case 'h2':
      return <h2 className={reset ? text.headingReset : null}>{children}</h2>

    case 'h3':
      return <h3 className={reset ? text.headingReset : null}>{children}</h3>

    case 'h4':
      return <h4 className={reset ? text.headingReset : null}>{children}</h4>

    case 'h5':
      return <h5 className={reset ? text.headingReset : null}>{children}</h5>

    case 'h6':
      return <h6 className={reset ? text.headingReset : null}>{children}</h6>

    default:
      break
  }
}
