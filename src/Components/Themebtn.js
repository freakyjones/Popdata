import React, { Component } from 'react';
import { DataContext } from '../contexts/Datacontext';


class Themebtn extends Component{

    render(){
        return(
            <DataContext>
                {
                    (context)=>{
                        const Theme=context.islight?context.Theme.light:context.Theme.dark;
                        return(
                            <div className="btn" onClick={context.handleclick} style={{background:`${Theme.theme_btn_back}`,
                            borderRadius:'10px',transform:`translate(${context.position}px)`}}>
                        
                            <img src="../src/img/moon.png" alt="moon_img"/>
                            <img src="../src/img/sun.png" alt="sun_img"/>
                  
                          </div>
                        )
                    }
                }
            </DataContext>
        
        )
    }
}
export default Themebtn;