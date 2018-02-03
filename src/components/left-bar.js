import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../assets/css/left-bar.css';
import heart from '../assets/images/rubyheart.png';
import lootpouch from '../assets/images/lootpouch.png';


class LeftBar extends Component{

    render(){
        return (
            <section id="left-bar" className="left-menu">

                <div className="title-div">
                    <h3>Game Stats</h3>
                </div>

                <div className="player_hp">
                    <p className="label">Player HP</p>
                    <div className="health-container">
                        <div className="heart" id="start-heart">
                            <img src={heart} alt="heart"/>
                        </div>
                        <div className="heart" id="bonus-heart">
                            <img src={heart} alt="heart"/>
                        </div>
                    </div>
                </div>

                <div className="inventory">
                    <p className="label">Inventory</p>
                    <div className="value">
                        <div className="inventory-boxes"></div>
                        <div className="inventory-boxes"></div>
                    </div>
                </div>

                <div className="gp">
                    <p className="label">Gold Pieces</p>
                    <div className="loot-sack">
                        <img src={lootpouch} alt="sack of gold"/><p> : </p>
                    </div>
                    <div className="value">{this.props.gp}</div>
                </div>

                <div className="dragon_hp">
                    <p className="label">Dragon HP</p>
                    <div className="health-container">
                        <div className="dragon-health"></div>
                    </div>
                </div>

            </section>
        )
    }
}

function mapStateToProps(state){
    return{
        gp: state.game.gold
    }
}

export default connect(mapStateToProps)(LeftBar);



