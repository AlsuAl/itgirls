import './hero.css';


function Hero(props){
    return(
     <div className='hero'>
       <img src={props.url} alt="изображение"></img>
       <div className='charactername'>{props.name}</div>
       <div className='description'>{props.text}</div>
     </div>
    );
}

export default Hero;