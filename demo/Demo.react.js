import React, {Component} from 'react';
import {TableOwn} from '../src';

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>dash-components-table-own Demo</h1>

                <hr/>
                <h2>TableOwn</h2>
                <TableOwn
                    label="This is an example label"
                    tabel="table_text"
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
