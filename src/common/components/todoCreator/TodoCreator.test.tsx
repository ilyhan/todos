import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import TodoCreator from '@/common/components/todoCreator/TodoCreator';
import userEvent from '@testing-library/user-event';

describe('TodoCreator component', () => {
    const mockOnAddNewTodo = vi.fn();

    it('Renders input', () => {
        render(<TodoCreator onAddNewTodo={mockOnAddNewTodo} />);

        expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
    });

    it('Function called', async () => {
        render(<TodoCreator onAddNewTodo={mockOnAddNewTodo} />);
        const input = screen.getByPlaceholderText('What needs to be done?');
        const button = screen.getByRole('button', { name: '+' });

        await userEvent.type(input, 'Coding');
        await userEvent.click(button);

        expect(mockOnAddNewTodo).toHaveBeenCalledWith('Coding');
    });

    it('Clear input', async () => {
        render(<TodoCreator onAddNewTodo={mockOnAddNewTodo} />);
        const inputField = screen.getByPlaceholderText('What needs to be done?');
        const addButton = screen.getByRole('button', { name: '+' });

        await userEvent.type(inputField, 'Coding');
        await userEvent.click(addButton);

        expect(inputField).toHaveValue('');
    });
});