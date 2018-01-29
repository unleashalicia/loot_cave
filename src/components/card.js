import '../assets/css/card.css';

import React from 'react';
import {connect} from 'react-redux';

const Card = props => {
    return (
        <div className="card-container">
            <div className="front" src={props.frontImage}></div>
            <div className="back"></div>
        </div>
    )
};

// function mapStateToProps(state){
//     return {
//         cardImage: state.
//     }
// }
//
// export default connect(mapStateToProps, {})(Card);

export default Card;