import React from 'react';
import {shallow} from 'enzyme';
import TableOwn from '../TableOwn.react';

describe('TableOwn', () => {

    it('renders', () => {
        const component = shallow(<TableOwn label="Test label"/>);
        expect(component).to.be.ok;
    });
});
