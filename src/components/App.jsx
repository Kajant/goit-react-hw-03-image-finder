import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import requestAxios from 'API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './App.module.css';

class App extends Component {
  state = {
    items: [],
    total: 1,
    page: 1,
    perPage: 12,
    keyword: '',
    isLoadMore: false,
    isLoader: false,
  };

  onSearchPictures = keyword => {
        this.setState({ isLoader: true, isLoadMore: false, page: 1 });
    requestAxios(keyword, 1, this.state.perPage)
      .then(data => {if (data.hits.length === 0) {
      Notify.warning(`I couldn't find what you're searching for.`);
      this.setState({ isLoadMore: false });
    }this.setState({ items: data.hits, total: data.totalHits, page: 2, isLoadMore: true, keyword })})
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoader: false }));
    
  };

  onSerchLoadMore = keyword => {
    this.setState({ isLoader: true });
    requestAxios(keyword, this.state.page, this.state.perPage)
      .then(data => {
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoader: false }));

    this.setState(prevState => ({
      page: prevState.page + 1,
      loadMore: true,
    }));

    if (Math.ceil(this.state.total / this.state.perPage) === this.state.page) {
      Notify.info(`Nothing more in here.`);
      this.setState({ isLoadMore: false });
    }
  };

  render() {
    const { items, page, perPage, keyword } = this.state;
    return (
      <>
      <div className={css.App}>
        <Searchbar onSubmit={this.onSearchPictures} />
        <ImageGallery galleryArray={items} />
        {this.state.isLoadMore && (
          <Button
            onClick={() => this.onSerchLoadMore(keyword, page, perPage)}
          />
        )}
        {this.state.isLoader && <Loader />}
      </div>

      </>
    );
  }
}

export default App;
