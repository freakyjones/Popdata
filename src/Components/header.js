import React, { Component } from 'react';

import Themebtn from './Themebtn'
import { DataContext } from '../contexts/Datacontext';
class Header  extends Component{
    render(){
        return(
            <DataContext.Consumer>
                {
                    (context)=>{
                        const Theme=context.islight?context.Theme.light:context.Theme.dark;
                        return(
                            <header style={{background:`url(${Theme.header_background})`,marginBottom:'0px'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="content_left position_center">
                                    <div className="heading_txt">
                                    <h1  style={{color:`${Theme.main_heading}`}}>the site is  all about the increasing of population over time in world</h1>
                                    <p  style={{color:`${Theme.para_heading}`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    </div>
                                    <div className="know_more">
                                      <a href="#">know more</a>
                                    </div>
                                    <div className="theme_btn">
                                          <Themebtn/>
                                    </div>
                                    </div>
                                    <div className="content_right">
                                        <div className="spalsh_img">
                                           
                                        </div>
                                   
                                   </div>
                                  
                                </div>
                                
                            </div>
                        </header>
                        )
                    }
                }
            </DataContext.Consumer>
     
        )
    
    }
}
export default Header;
