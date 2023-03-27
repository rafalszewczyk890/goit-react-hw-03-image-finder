import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  onSubmit = event => {
    event.preventDefault();
    console.log(event.target[1].value);
    this.props.onSubmit(event.target[1].value);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
