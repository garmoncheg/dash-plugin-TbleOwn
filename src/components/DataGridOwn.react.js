import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataGridOwn extends Component {
    render() {
        var CONTACTS = [
            [0, 'id', 'name', 'phoneNumber', 'image'],
            [1,'Darth Vader', '+250966666666', 'img/darth.gif'],
            [2,'Princess Leia', '+250966344466','img/leia.gif'],
            [3,'Luke Skywalker', '+250976654433','img/luke.gif'],
            [4,'Chewbacca', '+250456784935','img/chewbacca.gif']
        ];
        const props = this.props;
        const label = props.label;

        var TD = React.createClass({
            render: function() {
                return <td>{this.props.td}</td>
            }
        });

        var TR = React.createClass({
            render: function() {
                return <tr>
                    {
                        this.props.td.map(function(el) {
                            return <TD key={el[0]} td={el} />
                        })
                    }
                </tr>
            }
        });

        var TH = React.createClass({
            render: function() {
                return <td>{
                    this.props.td.map (function(el) {
                            return <TD key={el[0]} td={el} />
                        })
                    }</td>
            }
        });

        return (
            <div className={props.wrapperClass}>
                <h1>{label}</h1>
                <table>
                    <th>
                    <TH td={CONTACTS[0]} />
                    </th>
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
     * Table wrapper class text for the table
     */
    'wrapperClass': PropTypes.string,

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     *
     */
    'summary': PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    'title': PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    'dashEvents': PropTypes.oneOf(['click'])

};