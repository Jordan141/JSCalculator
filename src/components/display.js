import React, {Component} from 'react'


class Display extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    render(){
        return(
                <input className='display' type="text" readOnly='true' value={this.props.value}/>
        )
    }
}

export default Display