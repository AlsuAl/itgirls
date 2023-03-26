import React from "react";
import './cards.scss';
import  cards from './data.js';
 
class Card extends React.Component{
    render(){
      const{name,price,limit,text}=this.props;
     // let classSelected="";
      //if(isSelected)classSelected="selected";
        return(
            <div className='tarif-card'>
                <div className='name'>{name}</div>
                <div className='price'>руб{price}/мес</div>
                <div className='limit'>{limit}</div>
                <div className='text'>{text}</div>
            </div>
        )
    }
}
 export default Card;