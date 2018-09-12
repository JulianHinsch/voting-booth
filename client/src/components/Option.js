import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => (
    <div className={`option ${props.voted ? 'voted' : ''}`}>
        <table>
            <tbody>
                <tr onClick={() => props.handleSelect(props.option)}>
                    <td className='radio'>
                        <input type='radio' checked={props.selected ? true : false}/>
                    </td>
                    <td colSpan={2}>
                        {props.option.get('answer')}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

Option.propTypes = {
    option: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    handleSelect: PropTypes.func.isRequired,
    voted: PropTypes.bool.isRequired,
}

export default Option;