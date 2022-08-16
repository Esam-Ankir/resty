import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../app";

beforeEach(() => {
    render(<App />);
})

test('Test1: load and display app', async () => {
    const methodName = await waitFor(() => screen.getByTestId('Request-Method'));
    expect(methodName).toHaveTextContent('Request Method:');


});
test('Test2: Request Method could be changed when click on any method', async () => {
    fireEvent.click(screen.getByTestId('get'));
    fireEvent.click(screen.getByTestId('go'));
    expect(screen.getByTestId('Request-Method')).toHaveTextContent("get");

});

test('Test3: Request URL could be changed when enter a new URL', async () => {
    fireEvent.click(screen.getByTestId('get'));
    fireEvent.input(screen.getByTestId('url'))
    fireEvent.click(screen.getByTestId('go'));
    expect(screen.getByTestId('urlDiv')).toHaveTextContent('URL:');
});