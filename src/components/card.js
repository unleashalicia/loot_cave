import React from 'react';
import {connect} from 'react-redux';

import '../assets/css/card.css';

const Card = props => {
    return (
        <div className="card-container">
            <div className={`front ${props.cardType} ${props.altImage}`}>
                <img src={props.frontImage} alt={props.altImage} />
            </div>
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

export default connect(null, {})(Card); //not sure how this will come together.