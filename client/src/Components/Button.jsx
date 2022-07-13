import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Button extends Component {
	static propTypes = {
		type: PropTypes.string,
		children: PropTypes.any,
		className: PropTypes.string,
		onClick: PropTypes.any
	}

	static defaultProps = {
		className: 'bg-ternary'
	}

	render() {
		return (
			<button type={this.props.type} 
				className={`
				text-neutral-100 hover:text-neutral-700 transition duration-300 ease-in-out
                flex justify-center items-center min-w-[44px] px-6 py-2 font-black rounded-xl
                ${this.props.className}`}
				onClick={this.props.onClick}
			>{this.props.children}</button>
		)
	}
}
