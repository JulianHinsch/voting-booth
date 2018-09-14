import React from 'react';
import PropTypes from 'prop-types';
import OptionResults from './OptionResults';

const Option = (props) => (
    <div className={`option ${props.voted ? 'voted' : ''}`}>
        <table onClick={() => props.handleSelect(props.option)}>
            <tbody>
                <tr>
                    <td className='radio'>
                        <input type='radio' checked={props.selected ? true : false}/>
                    </td>
                    <td colSpan={2}>
                        {props.option.get('answer')}
                    </td>
                </tr>
            </tbody>
        </table>
        {props.voted && (
            <OptionResults
                option={props.option}
                percentage={props.percentage}/>
        )}
    </div>
)

Option.propTypes = {
    option: PropTypes.object.isRequired,
    percentage: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    handleSelect: PropTypes.func.isRequired,
    voted: PropTypes.bool.isRequired,
}

export default Option;