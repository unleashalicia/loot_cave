import '../assets/css/game.css';

import React, {Component} from 'react';
import cardImages from '../helpers/card_images';
import Card from './card';


class Game extends Component{

    render(){

        const Deck = cardImages.map((item,index)=>{
            return <Card frontImage={item} key={index}/>
        });

        return (
            <div id="game-board">
                {Deck}
            </div>
        );
    }
}

export default Game;