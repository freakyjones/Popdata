import React, { Component } from 'react';
import Chart from './Chart'
import Showcase from './Showcase';
import { DataContext } from '../contexts/Datacontext';
class Femalepop extends Component{
  constructor(props){
    super(props)
    this.state={
      display:"Bar",
      chartdata:{},
      year:[],
      femalepop:[]
  }
this.handlechange=this.handlechange.bind(this)
  }
  handlechange(event){
    console.log("hello")
    const value=event.target.value;
    const name=event.target.name;
    console.log(value,name)
    this.setState({[name]:value})
}
getdata(){
  {this.state.display==="Bar"?
  this.setState({chartdata: {
    labels: this.state.year,
    datasets: [{
        label: 'increase of population',
        data: this.state.femalepop,
        backgroundColor: "blue",
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}})
:this.state.display==="Pie"
?this.setState({chartdata: {
  labels: this.state.year,
  datasets: [{
      label: 'increase of population',
      data: this.state.femalepop,
      backgroundColor: "orange",
      borderColor: "blue",
      borderWidth: 0.1,
      hoverBackgroundColor:"#fff",
      hoverBorderColor:"yellow",
      borderAlign:"inner",
      weight:5
  }]
}})
:this.state.display==="Line"
?this.setState({chartdata: {
  labels: this.state.year,
  datasets: [{
      label: 'increase of population',
      data: this.state.femalepop,
      backgroundColor: "#fff",
      borderColor:"blue", 
        
      borderWidth: 3
  }]
}}):null;
}

}
componentDidMount(){
  const interval=setInterval(()=>{
    fetch('../src/data.csv')
    .then(res=>{
      return res.text();
    })
    .then(data=>{
        const row=data.split('\n')
       const year=row.map(element=>{
            return(element.split(',')[4])
        })
  
        const femalepop=row.map(element=>{
            return(element.split(',')[7])
        })
        this.setState(()=>{
          const newyear=year;
          const pop=femalepop
          return{
            year:newyear,
            femalepop:pop
          }
        })
      
      })
      .catch(error=>{
        console.log(error)
      })
     this.getdata();
  },500)
  
}
componentWillUnmount(){
  clearInterval(interval,1000)
}
    render(){
        console.log(this.state.year)
        return(
          <DataContext.Consumer>
            {
              (context)=>{
                const Theme=context.islight?context.Theme.light:context.Theme.dark;
                return(
                  <section id="femalepop" style={{background:`${ Theme.ui_background}`,marginTop:'0px'}}>
                  <div className="container">
               <div className="column">
                  <div className="upper_section">
                       <div className="row">
                       <div className="types">
                       <Showcase handlechange={this.handlechange} display={this.state.display}/>
                                 <div className="axis">
                                      <div className="x row">
                                          <p>x-axis</p>
                                        <div className="line">
                                           <p>population</p>
                                        </div>
                                      </div>
                                      <div className="y row">
                                          <p>x-axis</p>
                                        <div className="line">
                                           <p>population</p>
                                        </div>
                                      </div>
                                 </div>
                           </div>
                           <div className="heading_txt">
                                <h1 style={{color:`${Theme.main_heading}`}}>increase of the number male population in the world lorem ipsum</h1>
                                <p style={{color:`${Theme.para_heading}`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                           </div>
                          
                       </div>
                  </div>
                  <div className="lower_section">
                  <Chart display={this.state.display} chartdata={this.state.chartdata}/>
                  </div>
               </div>
             </div>

          </section>
                )
              }
            }
        
          </DataContext.Consumer>
          
        )
    }
}
export default Femalepop;