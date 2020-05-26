import React, { Component } from 'react';
import css from '../style/App.css'
import Header from './header';
import Malepop from './malepop';
import Femalepop from './femalepop';
import Dens from './Denspop';
import Footer from './footer'
import Totalpop from './Totalpop';
import Data_Context_provider from '../contexts/Datacontext';
class App extends Component{
    
    render(){
        return(

            <div id="app" style={{background:'#000'}}>
             <Data_Context_provider>
             <Header/>
             <Malepop/>
             <Femalepop/>
             <Totalpop/>
             <Dens/>
             <Footer/>
             </Data_Context_provider>
            </div>
        )
    }
}

export default App;