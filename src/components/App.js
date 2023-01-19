import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from 'services/api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    status: 'idle',
    query: '',
    images: [],
    activeImage: null,
    page: 1,
    totalPages: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query, page } = this.state;

    if (!query) return;

    if (page !== prevPage || query !== prevQuery) {
      this.getImages();
    }
  }

  async getImages() {
    const { query, page, images } = this.state;

    this.setStatus('pending');

    try {
      const { hits, totalHits } = await getImages(query, page);

      this.setState({
        images: [...images, ...hits],
      });

      if (page === 1) {
        this.calculateTotalPages(totalHits);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setStatus('resolved');
    }
  }

  calculateTotalPages(total) {
    this.setState({ totalPages: Math.ceil(total / 12) });
  }

  setNewQuery = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      totalPages: 1,
      status: 'idle',
    });
  };
  handleFormSearch = query => {
    this.setState({ query });
  };

  setActiveImageUrl = url => this.setState({ activeImage: url });

  setNextPage = () => this.setState(({ page }) => ({ page: page + 1 }));

  setStatus = status => this.setState({ status });

  render() {
    const { status, images, page, totalPages } = this.state;

    const isVisibleButton = page < totalPages && status === 'resolved';

    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSearch} />

        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.setActiveImageUrl} />
        )}

        {/* {activeImage && (
          <Modal
            url={activeImage}
            onClose={() => this.setActiveImageUrl(null)}
          />
        )} */}

        {isVisibleButton && (
          <Button onClick={this.setNextPage}>Load More</Button>
        )}

        {status === 'pending' && <Loader />}
        <ToastContainer autoClose={3000} />
        {/* <Modal /> */}
      </Layout>
    );
  }
}

// https://pixabay.com/api/?q=cat&page=1&key=30739552-0c064bc595ee99672668e6526&image_type=photo&orientation=horizontal&per_page=12
