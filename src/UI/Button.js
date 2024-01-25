import React from "react";

import bs from '../stiles/button.module.css'

class Button extends React.Component{
    render(){
        return(
            <button 
                onClick={this.props.click} 
                className={bs.button}
                >
                    {this.props.name}
            </button>
        )
    }
}

export default Button