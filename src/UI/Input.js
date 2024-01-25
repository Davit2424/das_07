import React from "react";

class Input extends React.Component {
    render(){
        return(
            <input 
                onChange={this.props.changeInput} 
                value={this.props.value} 
                type={this.props.type}
                />
        )
    }
}

export default Input