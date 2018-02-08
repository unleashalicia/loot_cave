import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from '../actions';
import '../assets/css/right-bar.css';

class RightBar extends Component{

    handleResetClick(){
        reset();
    }

    render(){

        console.log();

        return (
            <section id="right-bar" className ="right-menu">
                <div className="stats-container">
                    <div className="title-div">
                        <h3>Memory Stats</h3>
                    </div>
                    <div className="games-played stats-div">
                        <p className="label">Games: </p>
                        <div className="value">0</div>
                    </div>
                    <div className="attempts stats-div">
                        <p className="label">Attempts: </p>
                        <div className="value">0</div>
                    </div>
                    <div className="accuracy stats-div">
                        <p className="label">Accuracy: </p>
                        <div className="value">0</div>
                    </div>
                    <button onClick={this.handleResetClick} className="reset">New Game</button>
                    <div id="music-container">
                        <i className="fa fa-music" aria-hidden="true"></i>
                        <button className="audio"><i className="fa fa-play"></i></button>
                    </div>
                </div>
            </section>
        )
    }
}



export default connect(null, {reset})(RightBar);