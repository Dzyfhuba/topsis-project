import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ButtonAnchor extends Component {
	static propTypes = {
		to: PropTypes.string,
		children: PropTypes.string,
		className: PropTypes.string,
	}

	render() {
		return (
			<Link to={this.props.to} className={`bg-ternary text-neutral-100 hover:text-neutral-700 transition duration-300 ease-in-out
            flex justify-center items-center min-w-[44px] px-6 py-2 font-black rounded-xl ${this.props.className}`}>
				{this.props.children}
			</Link>
		)
	}
}