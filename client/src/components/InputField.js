import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {

	static propTypes = {
		handleInputChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		errorMessage: PropTypes.string,
  		placeholder: PropTypes.string,
  		validation: PropTypes.func,
  		autofocus: PropTypes.string,
  		onFocus: PropTypes.func,
  		value: PropTypes.string,
	}

	render() {
        return (
            <div className="input-container">
                <input className={`inputfield ${this.props.errorMessage==="" ? 'invalid' : ''}`}
                    name={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleInputChange} 
                    onBlur={this.props.validation}
                    onFocus={this.props.onFocus}
                    autoFocus={this.props.autofocus}
                    value={this.props.value} />
                <div className="error-message">{this.props.errorMessage}</div>
            </div>
        );
	}
}