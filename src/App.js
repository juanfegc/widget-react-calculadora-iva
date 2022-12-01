import './App.css'
import { useState } from 'react'
import React from 'react'
import { Select } from './components/Select'
import { Input } from './components/Input'
import { Label } from './components/Label'
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
    <div>
      <div className='container'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='box'>
          <Label>IVA:</Label>

          <Label>Precio con IVA:</Label>

          <Label>Precio sin IVA:</Label>
        </div>
        <div className='box'>
          <Select value={iva} onChange={handleChangeSelect}>
            <option value='10'>10%</option>
            <option value='21'>21%</option>
          </Select>

          <Input
            type='number'
            value={precioConIVA}
            onChange={handlePrecioConIvaChange}
            onFocus={handleFocusInput}
            name='CONIVA'
          />

          <Input
            type='number'
            value={precioSinIVA}
            onChange={handlePrecioSinIvaChange}
            onFocus={handleFocusInput}
            name='SINIVA'
          />
        </div>
      </div>
    </div>
  )
}

export default App
