import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };
  handleFormSearch = imageName => {
    this.setState({ imageName });
  };

  setNextPage = () => this.setState(({ page }) => ({ page: page + 1 }));

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSearch} />
        <ImageGallery query={this.state.imageName} />
        <Button />
        <Loader />
        <ToastContainer autoClose={3000} />
        {/* <Modal /> */}
      </Layout>
    );
  }
}

// https://pixabay.com/api/?q=cat&page=1&key=30739552-0c064bc595ee99672668e6526&image_type=photo&orientation=horizontal&per_page=12
