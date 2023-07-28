import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const container = document.createElement('div')
    ReactDOM.render(<App />, container)
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
  })
})
