import React from 'react';
import PropTypes from 'prop-types';

const OptionResults = (props) => (
    <table class='option-results'>
        <tbody>
            <tr>
                <td className='votes'>
                    {props.option.get('votes')} votes
                </td>
                <td className='percentage'>
                    {props.percentage}%
                </td>
                <td className='bar'>
                    <div>
                        <div style={{width: `${props.percentage}%`}}/>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
)

OptionResults.propTypes = {
    option: PropTypes.object.isRequired,
    percentage: PropTypes.string.isRequired,
}

export default OptionResults;