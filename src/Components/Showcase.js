import React, { Component } from 'react';
import { DataContext } from '../contexts/Datacontext';

class Showcase extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    //  this.handlechange=this.handlechange.bind(this)
    }
    // handlechange(event){
    //     console.log("hello")
    //     const value=event.target.value;
    //     const name=event.target.name;
    //     console.log(value,name)
    //     this.setState({[name]:value})
    // }
    render(){
        return(
            <DataContext.Consumer>
                {
                    (context)=>{
                        const Theme=context.islight?context.Theme.light:context.Theme.dark;
                       return(
                        <div className="show_case" style={{background:`${Theme.show_case_back}`}}>
                        <h2 style={{color:`${Theme.show_case_font}`}}>show case</h2>
                        <form className="row">
                            <div className="row bar">
                            <input type="radio" name="display" value="Bar" onChange={this.props.handlechange} />
                            <label name="bar">Bar</label>
                            </div>
                          <div className="pie row">
                          <input type="radio" name="display" value="Pie" onChange={this.props.handlechange}/>
                          <label name="pie"  >Pie</label>
                          </div>
                          <div className="scatter row">
                          <input type="radio" name="display" value="Line"  onChange={this.props.handlechange} />
                          <label name="Line">Line</label>
                          </div>
                        </form>
                  </div>
                       )
                    }
                }
            </DataContext.Consumer>
       
        )
    }
}
export default Showcase;