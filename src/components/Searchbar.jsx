import { Component } from 'react';

class Searchbar extends Component {
  onSubmit = event => {
    event.preventDefault();
    console.log(event.target[1].value);
    this.props.onSubmit(event.target[1].value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
