import React from 'react'
import { animated, interpolate } from 'react-spring/hooks.cjs'
import Carousel from 'nuka-carousel'
import { string, number, array } from 'prop-types'
import styles from '../styles/Home.module.css'

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, text, pics } = data[i]

  return (
    // <div>
    <animated.div
      className={styles.toplevel}
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}>
      <animated.div
        className={styles.twolevel}
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}>
        <div className={styles.threelevel}>
          {/* <Carousel>
            {pics.map((pic, index) => (
              <img src={pic} key={index} alt="profilePicture" />
            ))}
          </Carousel> */}
          <h2>{name},</h2>
          <h2>{age}</h2>
          <h5>{distance}</h5>
          <h5>{text}</h5>
        </div>
      </animated.div>
    </animated.div>
    // </div>
  )
}

Card.propTypes = {
  name: string,
  age: number,
  distance: string,
  text: string,
  pics: array,
}

export default Card
