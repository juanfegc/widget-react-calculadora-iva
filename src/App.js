import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import logo from './calculator.png'

const App = () => {
  const [precioConIVA, setPrecioConIVA] = useState('')
  const [iva, setIVA] = useState('10')
  const [precioSinIVA, setPrecioSinIVA] = useState('')

  const calcularPVP = num => {
    const pvp = iva === '10' ? (num / 1.1).toFixed(2) : (num / 1.21).toFixed(2)
    return pvp
  }
  const calcularPVPSin = num => {
    const pvp_sin =
      iva === '10' ? (num * 1.1).toFixed(2) : (num * 1.21).toFixed(2)
    return pvp_sin
  }

  const handlePrecioConIvaChange = event => {
    setPrecioConIVA(event.target.value)
    setPrecioSinIVA(calcularPVP(event.target.value))
  }

  const handlePrecioSinIvaChange = event => {
    setPrecioSinIVA(event.target.value)
    setPrecioConIVA(calcularPVPSin(event.target.value))
  }

  const handleChangeSelect = event => {
    setIVA(event.target.value)
    setPrecioConIVA('')
    setPrecioSinIVA('')
  }

  const handleFocusInput = event => {
    //console.log({event})
    //console.log(event.target.name)
    event.target.name === 'CONIVA' ? setPrecioConIVA('') : setPrecioSinIVA('')
  }

  return (
    <Container>
      <Row>
        <Col>
          <img src={logo} className='App-logo' alt='logo' />
        </Col>
        <Col>
          <Row>
            <Col>
              <Label>IVA:</Label>
            </Col>
            <Col>
              <Input type='select' value={iva} onChange={handleChangeSelect}>
                <option value='10'>10%</option>
                <option value='21'>21%</option>
              </Input>
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>Precio con IVA:</Label>
            </Col>
            <Col>
              <Input
                type='number'
                value={precioConIVA}
                onChange={handlePrecioConIvaChange}
                onFocus={handleFocusInput}
                name='CONIVA'
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>Precio sin IVA:</Label>
            </Col>
            <Col>
              <Input
                type='number'
                value={precioSinIVA}
                onChange={handlePrecioSinIvaChange}
                onFocus={handleFocusInput}
                name='SINIVA'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
