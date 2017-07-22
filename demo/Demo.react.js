import React, {Component} from 'react';
import {ExampleComponent} from '../src';

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>dash-components-table-own Demo</h1>

                <hr/>
                <h2>ExampleComponent</h2>
                <ExampleComponent
                    label="This is an example label"
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
