import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataGridOwn extends Component {
    render() {
        const props = this.props;
        const label = props.label;
        const csv_data = props.csv_data;

        // Demo data
        const CONTACTS = [
            [0, 'id', 'name', 'phoneNumber', 'image'],
            [1,'Darth Vader', '+250966666666', 'img/darth.gif'],
            [2,'Princess Leia', '+250966344466','img/leia.gif'],
            [3,'Luke Skywalker', '+250976654433','img/luke.gif'],
            [4,'Chewbacca', '+250456784935','img/chewbacca.gif']
        ] || csv_data; // TODO: this instead of demo data.

        var TD = React.createClass({
            render: function() {
                return <td keys={this.props.key}>{this.props.td}</td>
            }
        });

        var TR = React.createClass({
            render: function() {
                return <tr>
                    {
                        this.props.td.map(function(el) {
                            if (el[0]===0) {  // TODO: render conditionally table header.
                                return <TH key={el[0]} td={el} />
                            } else {
                                return <TD key={el[0]} td={el} keys={el[0]}/>
                            }
                        })
                    }
                </tr>
            }
        });

        var TH = React.createClass({
            render: function() {
                return <th>{this.props.td}</th>
            }
        });

        return (
            <div className={props.wrapperClass}>
                <h1>{label}</h1>
                <table>
                    {
                        //TODO: CONTACTS.shift();
                        CONTACTS.map(function(el) {
                            return <TR key={el[0]} td={el} />
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
     * csv_data = = [
            [0, 'id', 'name', 'phoneNumber', 'image'],
            [1,'Darth Vader', '+250966666666', 'img/darth.gif'],
            [2,'Princess Leia', '+250966344466','img/leia.gif'],
            [3,'Luke Skywalker', '+250976654433','img/luke.gif'],
            [4,'Chewbacca', '+250456784935','img/chewbacca.gif']
        ]
     */
    'csv_data': PropTypes.array

};