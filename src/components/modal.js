import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal} from "../actions";
import messages from '../helpers/modal_messages';
import '../assets/css/modal.css';
import '../assets/images/graphpaper.jpg';

class Modal extends Component {
    // constructor(props){
    //     super(props);
    //
    //     this.modal = true;
    //     this.closeModal = this.closeModal.bind(this);
    // }

    // closeModal(){
    //     this.modal = false;
    // }

    render() {

        const {modalState, toggleModal} = this.props;

        return (
            <div onClick={toggleModal} id="outer-modal" className={`${!modalState ? 'hidden' : ''}`}>
                <div id="inner-modal">
                    <div id="close">X</div>
                    <p>{messages.welcome}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        modalState: state.game.modal
    }
}

export default connect(mapStateToProps, {toggleModal})(Modal);