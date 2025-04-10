import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todos from '@/common/components/todos/Todos';
import { getTodos as realGetTodos } from '@/common/utils/getTodos';
import { setTodos as realSetTodosLs } from '@/common/utils/setTodods';

// Mock localStorage
const mockLocalStorage = (() => {
    let store: Record<string, string> = {};
    return {
        getItem(key: string) {
            return store[key] || null;
        },
        setItem(key: string, value: string) {
            store[key] = value;
        },
        removeItem(key: string) {
            delete store[key];
        },
        clear() {
            store = {};
        },
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
});

describe('Todos Component', () => {
    const mockTodos = [
        { id: 1, content: 'todo 1', isCompleted: false },
        { id: 2, content: 'todo 2', isCompleted: true },
    ];

    beforeEach(() => {
        window.localStorage.clear();
        realSetTodosLs(mockTodos); 
    });

    it('Adds a new todo', async () => {
        render(<Todos />);
        const inputField = screen.getByPlaceholderText('What needs to be done?');
        const addButton = screen.getByRole('button', { name: '+' });

        await userEvent.type(inputField, 'Coding');
        await userEvent.click(addButton);

        const newTodo = screen.getByText('Coding');
        expect(newTodo).toBeInTheDocument();

        const storedTodos = realGetTodos('All');
        expect(storedTodos.some((todo) => todo.content === 'Coding')).toBe(true);
    });

    it('Updates the local storage', async () => {
        render(<Todos />);
        const inputField = screen.getByPlaceholderText('What needs to be done?');
        const addButton = screen.getByRole('button', { name: '+' });

        await userEvent.type(inputField, 'Coding');
        await userEvent.click(addButton);

        await waitFor(() => {
            const storedTodos = realGetTodos('All');
            expect(storedTodos.length).toBeGreaterThan(0);
        });
    });

    it('Filters todos', async () => {
        render(<Todos />);
        const activeTabButton = screen.getByRole('button', { name: 'Active' });

        await userEvent.click(activeTabButton);

        const activeTodo = screen.getByText('todo 1');
        expect(activeTodo).toBeInTheDocument();

        const completedTodo = screen.queryByText('todo 2');
        expect(completedTodo).not.toBeInTheDocument();
    });

    it('Clears completed todos', async () => {
        render(<Todos />);
        const clearButton = screen.getByRole('button', { name: 'Clear completed' });

        await userEvent.click(clearButton);

        const completedTodo = screen.queryByText('todo 2');
        expect(completedTodo).not.toBeInTheDocument();

        const storedTodos = realGetTodos('All');
        expect(storedTodos.every((todo) => !todo.isCompleted)).toBe(true);
    });

    it('Displays the count of remaining todos', () => {
        render(<Todos />);
        const countElement = screen.getByText('1 items left');
        expect(countElement).toBeInTheDocument();
    });
});