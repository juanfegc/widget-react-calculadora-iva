import './App.css'
import { useState } from 'react'
import React from 'react'
import { Select } from './components/Select'
import { Input } from './components/Input'
import { Label } from './components/Label'

const App = () => {
  const [precioConIVA, setPrecioConIVA] = useState(0)
  const [iva, setIVA] = useState('10')
  const [precioSinIVA, setPrecioSinIVA] = useState(0)

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
    setPrecioConIVA(0)
    setPrecioSinIVA(0)
  }

  return (
    <div className='App'>
      <Label>IVA:</Label>
      <Select value={iva} onChange={handleChangeSelect}>
        <option value='10'>10%</option>
        <option value='21'>21%</option>
      </Select>
      <Label>Precio con IVA:</Label>
      <Input
        type='number'
        value={precioConIVA}
        onChange={handlePrecioConIvaChange}
      />
      <Label>Precio sin IVA:</Label>
      <Input
        type='number'
        value={precioSinIVA}
        onChange={handlePrecioSinIvaChange}
      />
    </div>
  )
}

export default App
