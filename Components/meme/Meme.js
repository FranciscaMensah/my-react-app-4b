import React from "react";
import './Meme.css';
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs';
import memeData from '../../memeData'

export default function Meme (){
    const getMemeImage = () => {
        const memes = memeData;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const {url, name} = memes[randomNumber];
    }

    return(
        <div className="meme">
            <div className="form">
                <input 
                    className="form--input"
                    placeholder='Top text'
                    type='text'
                />
                <input 
                    className="form--input"
                    placeholder='Bottom text'
                    type='text'
                />
                <button 
                    className="form--btn"
                    onClick={getMemeImage}>
                        <BsFillEmojiHeartEyesFill
                            className="form--btn-icon"
                            size='16'
                        />
                    Get new Meme Image
                </button>  
            </div>               
            <div className="meme--image">
                <img src='hh' alt=''/>
                {/* {props.imageDescription} */}
            </div>
        </div>
    )
}