import { Component } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import Searchbar from './components/SearchBar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { mapper } from './helpers/mapper';
import api from './helpers/images-api';

export default class App extends Component {
  state = {
    query: '',
    largeImageURL: '',
    showModal: false,
    page: 1,
    images: [],
    error: null,
    loading: false,
  };

  toggleModal = largeImageURL => {
    console.log('click  on list', largeImageURL);
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: largeImageURL,
    }));
  };

  handleSearchSubmit = searchData => {
    console.log(searchData);
    this.setState({
      query: searchData.query,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.images.length < this.state.images.length) {
      return this.state.images.scrollHeight - this.state.images.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;
    const queryPage = this.state.page;

    if (prevQuery !== newQuery) {
      console.log('запрос ізменілся');
      this.setState({ loading: true, page: 1 });
      const { fetchImages } = api;
      fetchImages(newQuery, queryPage)
        .then(data => {
          console.log(data);
          if (data.hits.length === 0) {
            toast('No  images  found');
            return;
          }
          this.setState(prevState => ({
            images: [...mapper(data.hits)],
            page: prevState.page + 1,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }
  onButtonHandler = e => {
    console.log('click  on  button ');
    const newQuery = this.state.query;
    const queryPage = this.state.page;
    const { fetchImages } = api;
    this.setState({ loading: true });
    // setInterval(() => {
    fetchImages(newQuery, queryPage)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(data.hits)],
          page: prevState.page + 1,
        }));

        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
    // }, 3000);
  };

  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '99',
    };
    const { loading, images, query, largeImageURL, showModal } = this.state;

    return (
      <div className="container">
        <ToastContainer />
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && (
          <div style={style}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        )}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            query={query}
            onImgClick={this.toggleModal}
          />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
        {images.length > 11 && !loading && (
          <Button onClick={this.onButtonHandler} />
        )}
      </div>
    );
  }
}
