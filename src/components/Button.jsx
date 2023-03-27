import { Component } from 'react';
import css from './Button.module.css';


class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className={css.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
