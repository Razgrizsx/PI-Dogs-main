import React from "react";
import { screen, render } from '@testing-library/react'
import { First } from './components/First'

describe('prueba', () =>{
  it('must render a title', () => {
    render(<First/>)
    expect(screen.queryByText(/Bienvenido/i)).toBeInTheDocument()
  })

}) 

