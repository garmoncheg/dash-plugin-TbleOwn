import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataGridOwn extends Component {
    render() {
        const props = this.props;
        const label = props.label;
        const csv_data = props.csv_data;

        // Demo data
        const CONTACTS = csv_data || [
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
                            return <TD key={el} td={el} />
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
                        //TODO: CONTACTS.shift();
                        CONTACTS.map(function(el) {
                            if(!el[0]) {
                                return <TRTH key={el} td={el} />
                            } else {
                                return <TRTD key={el} td={el} />
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
     */
    'csv_data': PropTypes.object

};