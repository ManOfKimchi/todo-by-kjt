import React, { Component, Fragment } from 'react';

class ToDoInput extends Component {
    static defaultProps = {
        placeholder: "default placeholder"
    }
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Fragment>
                <input 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.keyChange} 
                    value={this.props.input}></input>
            </Fragment>
        )
    }
}

export default ToDoInput;