import React, { Component } from 'react';
import PropTypes from 'prop-types';

//presentational component

class InputField extends Component {

	static propTypes = {
		handleInputChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		errorMessage: PropTypes.string.isRequired,
  		placeholder: PropTypes.string,
  		validation: PropTypes.func,
  		autofocus: PropTypes.string,
  		onFocus: PropTypes.func,
  		value: PropTypes.string,
	}

	/* TODO: syntax improvement:

	  something like...

	 style={{
      textDecoration: errorMessage!=="" ? 'pink' : 'white'
    }}

    */

	render() {
		if (this.props.errorMessage==="") {
			return (
				<div className="input-container">
					<input className="inputfield"
						name={this.props.name}
						type={this.props.type}
						placeholder={this.props.placeholder}
						onChange={this.props.handleInputChange} 
						onBlur={this.props.validation}
						onFocus={this.props.onFocus}
						autoFocus={this.props.autofocus}
						value={this.props.value} />
					<div className="error-message"></div>
				</div>
			);
		} else {
			return (
				<div className="input-container">
					<input className="inputfield invalid"
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
}

export default InputField;