import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import MainContainer from './components/MainContainer'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1)
  },
  mainContainer: {
    padding: theme.spacing(2)
  },
  search: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  appBarSpacer: theme.mixins.toolbar,
  leftBar: {
    height: "100vh"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    maxWidth: 345,
  },
  pagination: {
    marginBottom: theme.spacing(2)
  },
}));

function App() {
  const classes = useStyles();

  const [imagesName, setImagesName] = useState(' ');
  const [allImages, setAllImages] = useState([]);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [isBookmark, setIsBookmark] = useState(false);

  function onSearch(text) {
    setImagesName(text);
    setNumberOfPage(1);
  }

  function getImagesUrl(imagesInfo) {
    if (imagesInfo.stat === 'ok') {
      setAllImages(imagesInfo.photos.photo.map((image) => ({
        url: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
        id: image.id,
        title: `${image.title}`,
      })));
    } else {
      setAllImages([]);
    }
  }

  function setNewPage(newNumberOfPage) {
    setNumberOfPage(newNumberOfPage);
  }

  function changeContent(isSearch) {
      setIsBookmark(!isSearch);
  }

  useEffect(() => {
    const imagesInfoApiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a7a205c47862512bd5061a861c89dbeb&text=
    ${imagesName}&per_page=12&page=
    ${numberOfPage}&format=json&nojsoncallback=1`;
    axios.get(imagesInfoApiUrl).then((resp) => {
      const imagesInfo = resp.data;
      getImagesUrl(imagesInfo);
    });
  }, [imagesName, numberOfPage]);

  return (
    <>
      <Header classes={classes} />
      <MainContainer
        classes={classes}
        onSearch={onSearch}
        allImages={allImages}
        onChangePage={setNewPage}
        isBookmark={isBookmark}
        isSearch={changeContent}
        numberOfPage={numberOfPage}
      />
    </>
  );
}

export default App;
