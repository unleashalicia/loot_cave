import React, {Component} from 'react';
import '../assets/css/right-bar.css';

class RightBar extends Component{
    render(){
        return (
            <section id="right-bar" className ="right-menu">
                <div className="stats-container">
                    <div className="title-div">
                        <h3>Memory Stats</h3>
                    </div>
                    <div className="games-played">
                        <p className="label">Total Games : </p>
                        <div className="value"></div>
                    </div>
                    <div className="attempts">
                        <p className="label">Attempts : </p>
                        <div className="value"></div>
                    </div>
                    <div className="accuracy">
                        <p className="label">Accuracy : </p>
                        <div className="value"></div>
                    </div>
                    <button className="reset">New Game</button>
                    <i className="fa fa-music" aria-hidden="true"></i>
                    <button className="audio"><i className="fa fa-play"></i></button>
                </div>
            </section>
        )
    }
}

export default RightBar;