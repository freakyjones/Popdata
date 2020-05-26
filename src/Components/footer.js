import React, { Component } from 'react';
import { DataContext } from '../contexts/Datacontext';


class Footer extends Component{
    render(){
        return(
            <DataContext.Consumer>
                {
                    (context)=>{
                        const Theme=context.islight?context.Theme.light:context.Theme.dark;
                        return(
                            <footer style={{background:`${ Theme.ui_background}`,marginTop:'0px'}}>
                            <p style={{color:`${ Theme.footeer_font}`}}>copright&copy;2020-freakyjones</p>
                            
                        </footer>
                        )
                    
                   
                    }
                }
            </DataContext.Consumer>
      
            
          
        )
    }
}
export default Footer;