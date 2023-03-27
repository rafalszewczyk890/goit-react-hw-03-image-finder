import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onClick}>
        <div className={css.Modal}>
          <img src={this.props.source} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
