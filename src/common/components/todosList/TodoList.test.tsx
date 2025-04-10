import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodosList from '@/common/components/todosList/TodosList';
import { ITodo } from '@/common/interfaces/todos';

describe('TodosList Component', () => {
    const mockOnChecked = vi.fn();

    const todos: ITodo[] = [
        { id: 1, content: 'todo 1', isCompleted: false },
        { id: 2, content: 'todo 2', isCompleted: true },
    ];

    it('Render todos', () => {
        render(<TodosList todos={todos} onChecked={mockOnChecked} />);

        expect(screen.getByText('todo 1')).toBeInTheDocument();
        expect(screen.getByText('todo 2')).toBeInTheDocument();
    });

    it('Called onCheced function', async () => {
        render(<TodosList todos={todos} onChecked={mockOnChecked} />);

        const checkbox = screen.getAllByRole('checkbox')[0];
        await userEvent.click(checkbox);

        const completedTask = screen.getByText('todo 1').closest('li');

        expect(mockOnChecked).toHaveBeenCalledWith(1);
        expect(completedTask).not.toHaveClass('todos-list__item_complete');
    });

    it('Completed task have class "todos-list__item_complete" ', () => {
        render(<TodosList todos={todos} onChecked={mockOnChecked} />);

        const completedTask = screen.getByText('todo 2').closest('li');
        expect(completedTask).toHaveClass('todos-list__item_complete');
    });
});