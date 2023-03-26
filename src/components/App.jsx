import Searchbar from './Searchbar';
import Modal from './Modal';
import Loader from './Loader';
import ImageGalleryItem from './ImageGalleryItem';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { Component } from 'react';
import axios from 'axios';

const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
  };

  onSubmit = value => {
    this.setState({
      query: value,
    });
  };

  onMore = () => {
    console.log(this.state.page);
    this.setState({
      page: 2,
    });
  };

  async componentDidMount() {
    const response = await axios.get(
      `?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ photos: response.data.hits });
  }

  async componentDidUpdate() {
    const response = await axios.get(
      `?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ photos: response.data.hits });
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery>
        <Button onClick={this.onMore} />
      </div>
    );
  }
}

export default App;
