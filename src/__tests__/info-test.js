import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import 'jest-dom/extend-expect';

import Info from '../components/info/info.js';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Renders Info correctly', () => {
    const { getByTestId } = render(<Info />);
    expect(getByTestId('element-info')).toHaveTextContent("JSX produces React 'elements'");
});