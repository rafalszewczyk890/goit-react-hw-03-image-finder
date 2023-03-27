import Searchbar from './Searchbar';
import Modal from './Modal';
import Loader from './Loader';
import ImageGalleryItem from './ImageGalleryItem';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { Component } from 'react';
import css from './App.module.css';
import fetchPhotos from './api/api';

class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    loadMore: false,
    isLoading: false,
    showModal: false,
    modalImg: null,
  };

  onSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      loadMore: true,
      photos: [],
    });
  };

  onMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showModal = source => {
    this.setState({ showModal: true, modalImg: source });
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  // async componentDidMount() {
  //   console.log('mount');
  // const response = await axios.get(
  //   `?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  // );
  // this.setState({ photos: response.data.hits });
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      const response = await fetchPhotos(this.state.query, this.state.page);
      console.log(response);
      if (response.data.hits.length < 12) {
        console.log(response.data.hits.length);
        this.setState({ loadMore: false });
      }
      this.setState(prevState => ({
        photos: [...prevState.photos, ...response.data.hits],
        isLoading: false,
      }));
    }
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.query.length > 0 ? (
          <ImageGallery>
            <ImageGalleryItem
              photos={this.state.photos}
              onClick={this.showModal}
            />
            {this.state.showModal && (
              <Modal onClick={this.modalClose} source={this.state.modalImg} />
            )}
            {this.state.isLoading && <Loader />}
          </ImageGallery>
        ) : (
          ''
        )}
        {this.state.loadMore && <Button onClick={this.onMore} />}
      </div>
    );
  }
}

export default App;
