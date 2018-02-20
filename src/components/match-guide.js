import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMatchKey} from "../actions";

import '../assets/css/modal.css';
import '../assets/css/match-guide.css';

import treasure from '../assets/images/Gold_Chest.png';
import dragon from '../assets/images/dragon-den-background.jpg';
import armor from '../assets/images/chainmail.png';
import weapon from '../assets/images/sword.png';

class MatchGuide extends Component{

    hideMatchGuide(){
        const {matchKey, toggleMatchKey} = this.props;

        toggleMatchKey(matchKey);
    }

    render(){


        const {matchKey} = this.props;

        return (
            <div onClick={() => {this.hideMatchGuide()}} className={`outer-modal ${!matchKey ? 'hidden' : ''}`}>
                <div id="match-guide" className={`inner-modal ${!matchKey ? 'top-hidden' : 'shown'}`}>
                    <h1>Match Guide</h1>
                    <span className="close">X</span>
                    <div id="dragon-card-info">
                        <div id="dragon-card-image" className="card-figure" >
                            <img src={dragon} alt="dragon"/>
                        </div>
                        <div>
                            <ul>
                                <li>If you match two dragon pieces, you stab the dragon.</li>
                                <li>If you mismatch two dragon pieces, he sees you and attacks.</li>
                                <li>If you see one dragon piece but don't match it to another, you have caught a glimpse of the dragon, but you are able to sneak away.</li>
                                <li>If you defeat the dragon, you can still look for treasure after.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="card-figure">
                            <img id="gold-card" src={treasure} alt="gold chest"/>
                        </div>
                        <div>Matching 2 items will increase your gold pieces (gp) by the value of each item.</div>
                    </div>
                    <div>
                        <div className="card-figure">
                            <img src={armor} alt="chainmail"/>
                        </div>
                        <div>Matching armor cards will give you +1 hit points (hp).</div>
                    </div>
                    <div>
                        <div className="card-figure">
                            <img src={weapon} alt="sword"/>
                        </div>
                        <div>Matching sword cards will give you +1 damage against the dragon.</div>
                    </div>
                    <div id="close-message">Close to Continue Your Quest</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        matchKey: state.game.matchKey
    }
}

export default connect(mapStateToProps, {toggleMatchKey})(MatchGuide);
