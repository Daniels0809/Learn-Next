import { render, screen } from '@testing-library/react';

import { MiButton } from '../components/button/Button';

const handleClick = () => {
  console.log('click')
}

test('renderiza label en el DOM', () => {
  render(<MiButton text='Guardar' icon='X' click={handleClick}  />);
  expect(screen.getByText('Guardar')).toBeInTheDocument();
  expect(screen.getByLabelText('main-button')).toBeInTheDocument();
});