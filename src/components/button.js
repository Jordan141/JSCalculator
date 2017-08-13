import React, {Component} from 'react'


class Button extends Component{
    render(){
        return (
        <div className='button text-center' onClick={e => this.props.click(e)}>
            {this.props.value}    
        </div>
        )
    }
}

export default Button