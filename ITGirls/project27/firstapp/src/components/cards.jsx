import React from "react";
import './cards.scss';
import  cards from './data.js';
 
class Card extends React.Component{
    render(){
      const{name,price,limit,text,isSelected}=this.props;
     let classSelected="";
     if(isSelected)classSelected="selected";
        return(
            <div className={`tarif-card ${classSelected}`}>
                <div className='name'><span>{name}</span></div>
                <div className='price'>руб<span>{price}</span>/мес</div>
                <div className='limit'><p>{limit}</p></div>
                <div className='text'><p>{text}</p></div>
            </div>
        )
    }
}
 export default Card;