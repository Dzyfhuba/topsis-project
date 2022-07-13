import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Input extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
	}

	static defaultProps = {
		type: 'text',
	}

	render() {
		return (
			<div className="mb-3">
				<label htmlFor={this.props.label} className='block text-neutral-100 capitalize'>{this.props.label}</label>
				<input type={this.props.type} name={this.props.name} id={this.props.name} placeholder={this.props.placeholder}
					className={`p-3 rounded-xl ${this.props.className}`}
				/>
			</div>
		)
	}
}
