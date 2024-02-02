import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';  

describe('Teste para o componente Post', () => {
  test('Deve inserir 2 comentários', () => {
    render(<Post />);
    
    const textarea = screen.getByRole('textbox');
    const commentButton = screen.getByTestId('btn-comentar');

    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(commentButton);

    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(commentButton);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});