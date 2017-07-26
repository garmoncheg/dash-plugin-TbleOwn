import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataGridOwn extends Component {
    render() {
        let uuid = 0;
        const props = this.props;
        const label = props.label;
        const csv_data = props.csv_data;

        // Demo data
        const DATA = csv_data || [
            ['', 'id', 'name', 'phoneNumber', 'image'],
            ['0','Darth Vader', '+250966666666', 'img/darth.gif'],
            ['1','Princess Leia', '+250966344466','img/leia.gif'],
            ['2','Luke Skywalker', '+250976654433','img/luke.gif'],
            ['3','Chewbacca', '+250456784935','img/chewbacca.gif']
        ];


        var TH = React.createClass({
            render: function() {
                return <th>{this.props.td}</th>
            }
        });

        var TD = React.createClass({
            render: function() {
                return <td>{this.props.td}</td>
            }
        });

        // Body component
        var TRTD = React.createClass({
            render: function() {
                return <tr>
                    {
                        this.props.td.map(function(el) {
                            uuid = uuid + 1;
                            return <TD
                                key={uuid}
                                td={el}
                            />
                        })
                    }
                </tr>
            }
        });

        // Header Component
        var TRTH = React.createClass({
            render: function() {
                return <tr>
                    {
                        this.props.td.map(function(el) {
                            return <TH key={el} td={el} />
                        })
                    }
                </tr>
            }
        });

        return (
            <div>
                <h1>{label}</h1>
                <table>
                    {
                        DATA.map(function(el) {
                            if(!el[0]) {
                                return <TRTH key={el} td={el} />
                            } else {
                                //if (parseInt(el[0]) < max_rows) {

                                    return <TRTD key={el} td={el} />
                                //} else {
                                //    return
                                //}
                            }

                        })
                    }
                </table>
            </div>
        );
    }
}

DataGridOwn.propTypes = {
    /**
     * Header text for the table
     */
    'label': PropTypes.string.isRequired,

    /**
     * python read the CSV file data in format like so:
     * csv_data = [
            ['', 'id', 'name', 'phoneNumber', 'image'],
            ['0','Darth Vader', '+250966666666', 'img/darth.gif'],
            ['1','Princess Leia', '+250966344466','img/leia.gif'],
            ['2','Luke Skywalker', '+250976654433','img/luke.gif'],
            ['3','Chewbacca', '+250456784935','img/chewbacca.gif']
        ]

     example on how to read a CSV file in python and convert it like so:

        # Read the CSV file
        csv_data = []
        with open('some_csv_file.csv', 'r') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            for row in reader:
                csv_data.append(row)
     */
    'csv_data': PropTypes.object,

    /**
     * Number of maximum column rows to render. Default is 10
     */
        // TODO: make this work.
    'max_rows': PropTypes.number || 10

};