import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contador from './Contador';

describe('Componente Contador', () => {
  it('muestra el contador inicial en 0', () => {
    const { getByText, container } = render(<Contador />);
    console.log('DEBUG inicial DOM:', container.innerHTML);
    const element = getByText(/Valor actual:/);
    expect(element.textContent).toContain('0');
  });

  it('incrementa el contador al hacer clic', () => {
    const { getByText, container } = render(<Contador />);
    const button = getByText('Incrementar');
    fireEvent.click(button);
    console.log('DEBUG después 1 click DOM:', container.innerHTML); 
    const element = getByText(/Valor actual:/);
    expect(element.textContent).toContain('1');
  });

  it('incrementa varias veces correctamente', () => {
    const { getByText, container } = render(<Contador />);
    const button = getByText('Incrementar');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    console.log('DEBUG después 3 clicks DOM:', container.innerHTML); 
    const element = getByText(/Valor actual:/);
    expect(element.textContent).toContain('3');
  });
});
