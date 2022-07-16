import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Modal extends Component {
    static propTypes = {
        show: PropTypes.bool,
        children: PropTypes.any
    }
    
    render() {
        return (
            <div 
            className={`${this.props.show ? 'fixed ' : 'hidden '}h-screen w-screen bg-neutral-900 bg-opacity-50
            top-0 left-0 z-50 flex justify-center items-center`}
            >
                <div className="w-11/12 md:w-1/2 bg-primary p-5 rounded-lg">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
    