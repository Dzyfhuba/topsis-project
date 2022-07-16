import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Select extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		className: PropTypes.string,
		children: PropTypes.any,
		onChange: PropTypes.any
	}

	static defaultProps = {
		type: 'text',
	}

	render() {
		return (
			<div className="mb-3">
				<label htmlFor={this.props.label} className='block capitalize'>{this.props.label}</label>
				<select name={this.props.name} id={this.props.name} className={`w-full bg-white p-3 rounded-lg ${this.props.className}`} 
				onChange={this.props.onChange}
				>
					<option value="" hidden>{this.props.label}</option>
					{this.props.children}
				</select>
			</div>
		)
	}
}
