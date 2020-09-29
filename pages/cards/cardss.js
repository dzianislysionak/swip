import React, { Component } from 'react'
const h = React.createElement

import { SwiperConfig, PitchSwiper, DrawStacks } from '../../components/swipper'

// you can modify the global config variable
SwiperConfig.cardBackground = '#f8fcfe'
SwiperConfig.cardShade = 'gold'

function LargeNumber(props) {
  return h(
    'span',
    {
      style: {
        fontSize: '1cm',
        color: 'blue',
      },
    },
    props.number
  )
}

function SmallNumber(props) {
  return h(
    'span',
    {
      style: {
        fontSize: '0.5cm',
        color: 'brown',
      },
    },
    props.number
  )
}

function bitmask_as_text(x) {
  if (x == 0) return 'keep dragging'
  var s = ''
  if (x & 1) s += 'left '
  if (x & 2) s += 'right '
  if (x & 4) s += 'up '
  if (x & 8) s += 'down '
  return s
}

class SampleCardNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
    }

    this.on_dragstate = this.on_dragstate.bind(this)
  }

  componentDidMount() {
    this.setState({
      number: '<' + this.props.number + '>',
      label: 'still',
    })
  }

  on_dragstate(new_dragout) {
    this.setState({
      label: bitmask_as_text(new_dragout),
    })
  }

  render() {
    return h(
      'div',
      { style: { textAlign: 'center' } },
      h('br'),
      h('br'),
      h('br'),
      h('br'),
      h(LargeNumber, { number: this.state.number }),
      h('br'),
      h(SmallNumber, { number: this.state.label })
    )
  }
}

class SampleBackground extends Component {
  constructor(props) {
    super(props)
    this.on_card = this.on_card.bind(this)
    this.on_dragstate = this.on_dragstate.bind(this)
  }

  on_card(bitmask, number, item, all) {
    console.log(
      `card ${number} complete ${item.text} remaining: ${
        all.length - number - 1
      }`
    )
  }

  on_dragstate(bitmask) {
    console.log('dragstate change:', bitmask)
  }

  render() {
    return h(
      'div',
      {
        style: {
          zIndex: 1001,
          position: 'fixed',
          textAlign: 'center',
          top: 0,
          left: 0,
          width: SwiperConfig.width * 2,
          height: SwiperConfig.height * 1.5,
          background: '#eee',
        },
      },
      h(
        'div',
        {
          style: {
            fontSize: '5mm',
            color: 'red',
          },
        },
        'Open dev-tools to see the events'
      )
    )
  }
}

export default class Cardss extends Component {
  render() {
    return h(PitchSwiper, {
      Card: SampleCardNumber,
      Background: SampleBackground,
      data: [1, 2, 3],
      ref: (x) => {
        this.swiper = x
      },
    })
  }
}
