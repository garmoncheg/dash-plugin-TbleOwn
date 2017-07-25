import React from 'react';
import {shallow} from 'enzyme';
import DataGridOwn from '../DataGridOwn.react';

describe('DataGridOwn', () => {

    it('renders', () => {
        const component = shallow(<DataGridOwn label="Test label"/>);
        expect(component).to.be.ok;
    });
});
