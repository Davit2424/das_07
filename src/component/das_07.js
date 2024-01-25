import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

class Das_07 extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Anna',
            surname: 'Gevorgyan',
            age: 21,
            inputName: "",
            inputSurname: "",
            inputAge: ""
        }
    }

    changeName =()=> {
        this.state.name = 'Karen'
        this.setState({})
    }

    changeSurname =(e)=> {
        this.setState({
            surname: e
        })
    }

    changeInfo =()=> {
        this.setState({
            name: this.state.inputName,
            surname: this.state.inputSurname,
            age: this.state.inputAge,
        })
    }


    render(){
        return(
            <div>
                <div>
                    <h1>Das_07_1</h1>
                    <h3>{this.state.name} {this.state.surname} {this.state.age}</h3>
                    <Button click={ this.changeName } name="Chamge Name"/>
                    <Button click={ () => this.changeSurname("Sargsyan") } name="Chamge Surname"/>
                    <Button click={() => this.setState({age: 25})} name="Chamge Age"/>
                </div>
                <div>
                    <h1>Das_07_2</h1>
                    <h3>{this.state.name} {this.state.surname} {this.state.age}</h3>
                    <Input 
                        changeInput={ e => this.setState({inputName: e.target.value})} 
                        value={this.state.inputName} 
                        type='text'
                        />
                    <Input 
                        changeInput={ e => this.setState({inputSurname: e.target.value})} 
                        value={this.state.inputSurname} 
                        type='text'
                        />
                    <Input 
                        changeInput={ e => this.setState({inputAge: e.target.value})} 
                        value={this.state.inputAge} 
                        type='number'
                        />
                    <Button click={ this.changeInfo } name="Chamge Name"/>
                </div>
            </div>
        )
    }
}

export default Das_07