import React from 'react'
import text from './text.modules.css'
import { useTrail, animated } from 'react-spring'

export const Heading = ({ tag, children, reset, motion, duration }) => {
  const config = { mass: 5, tension: 2000, friction: duration || 600 }
  const toggle = true
  const items = [children.toString()]
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -20, height: 0 }
  })
  console.log(trail.join())

  switch (tag) {
    case 'h1':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h1
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h1>
        ))
      } else {
        return <h1 className={reset ? text.headingReset : null}>{children}</h1>
      }

    case 'h2':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h2
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h2>
        ))
      } else {
        return <h2 className={reset ? text.headingReset : null}>{children}</h2>
      }
    case 'h3':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h3
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h3>
        ))
      } else {
        return <h3 className={reset ? text.headingReset : null}>{children}</h3>
      }

    case 'h4':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h4
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h4>
        ))
      } else {
        return <h4 className={reset ? text.headingReset : null}>{children}</h4>
      }

    case 'h5':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h5
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h5>
        ))
      } else {
        return <h5 className={reset ? text.headingReset : null}>{children}</h5>
      }
    case 'h6':
      if (motion) {
        return trail.map(({ x, height, ...rest }, index) => (
          <animated.h6
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
            className={reset ? text.headingReset : null}
          >
            {items[index]}
          </animated.h6>
        ))
      } else {
        return <h6 className={reset ? text.headingReset : null}>{children}</h6>
      }

    default:
      break
  }
}
