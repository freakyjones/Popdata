import React, { Component } from 'react';
import { Bar, Pie , Line } from 'react-chartjs-3';
import { DataContext } from '../contexts/Datacontext';
import Femalepop from './femalepop';
class Chart extends Component{
    constructor(props){
      super(props)
      this.state={
          data:props.chartdata
      }
    }

    
    render(){
        console.log(this.props.chartdata)
        return(
        <DataContext.Consumer>
            {
                (context)=>{
                    return(
                        <div id="chart">
                        {this.props.display==="Bar"?
                          <Bar
                          data= {this.props.chartdata}
                          width={300}
                          height={300}
                          options={{ maintainAspectRatio: false }}
                          />:this.props.display==="Pie"?
                          <Pie
                          data= {this.props.chartdata}
                          width={300}
                          height={300}
                          options={
                              { maintainAspectRatio: false }
                            }
                          />:this.props.display==="Line"?
                          <Line
                          data= {this.props.chartdata}
                          width={300}
                          height={300}
                          options={
                               {maintainAspectRatio: false}

                            }
                          />:null
                        }
                   
                    </div>
                    )
                }
            }
        </DataContext.Consumer>
        )
    }
};
export default Chart;