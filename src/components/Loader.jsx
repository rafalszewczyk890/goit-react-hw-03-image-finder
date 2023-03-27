import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <Blocks
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    );
  }
}

export default Loader;
