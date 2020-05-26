import React, { Component,createContext } from 'react'

export const DataContext=createContext();


class Data_Context_provider extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"pandey",
            islight:true,
            position:0,
            Theme:{
                dark:{
                    header_background:'../src/img/backgrounddark.png',
                    ui_background:'#000',
                    theme_btn_back:'#EDD382',
                    main_heading:'#EDD382',
                    para_heading:'#ED7804',
                    know_more_button_back:'#6D00FF',
                    know_more_button_text:'#FFFFF5',
                    theme_button_main_back:'#000',
                    show_case_back:'#6D00FF',
                    show_case_font:'#fff',
                    axis_back:'#FF0033',
                    axis_font:'#EDD382',
                    axis_content:'#fff',
                    footeer_font:'#FFFFF5'
                },
                light:{
                    header_background:'../src/img/background.png',
                    ui_background:'#ED7804',
                    theme_btn_back:'#fff',
                    main_heading:'#FFFFF5',
                    para_heading:'#000',
                    know_more_button_back:'#FF0033',
                    know_more_button_text:'#FFFFF5',
                    theme_button_main_back:'#fff',
                    show_case_back:'#FF0033',
                    show_case_font:'#FDFFD7',
                    axis_back:'#FF0033',
                    axis_font:'#FFFFF5',
                    axis_content :'#000',
                    footeer_font:'#FFFFF5'
                }
            }
        }
        this.handleclick=this.handleclick.bind(this)
    }
handleclick(){
 this.setState(()=>{
     const newislight=!this.state.islight
     const newposition=-(this.state.position-30)
     return{
         islight:newislight,
         position:newposition,
         name:"freaky"
     }
 })
  }
    render(){
        console.log(this.state.year)
        return(
            <DataContext.Provider value={{...this.state,handleclick:this.handleclick}}>
            {this.props.children}
            </DataContext.Provider>
        )
    }
}
export default Data_Context_provider;