import '../assets/css/card.css';

import React from 'react';
import {connect} from 'react-redux';

const Card = props => {
    return (
        <div className="card-container">
            <div className=`front gold_chest`> 
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