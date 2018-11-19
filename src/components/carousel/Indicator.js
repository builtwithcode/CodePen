import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: -20px;
`

const Pip = styled.span`
  background: ${props => (props.isCurrent ? '#0077CC' : 'gainsboro')};
  width: 40px;
  height: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 30px;
  position: relative;
  left: 5%;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`

class Indicator extends Component {
  render() {
    const { length, position } = this.props

    return (
      <Container>
        {Array.from({ length }, (pip, i) => (
          <Pip key={i} isCurrent={i === position} />
        ))}
      </Container>
    )
  }
}

Indicator.propTypes = {
  length: PropTypes.number,
  position: PropTypes.number,
}

export default Indicator
