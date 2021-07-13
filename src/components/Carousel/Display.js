import React from 'react';
import '../../css/Display.css';
import staticStrings from '../../StaticStrings';
import { useSelector } from 'react-redux';
import { ReactComponent as HandDrawnArrow } from './arrow_button.svg';

export const Display = ({ photosObject }) => {
  const [currentPhoto, setCurrent] = React.useState(0);
  const isLeft = false;
  return (
    <div id='display-wrapper'>
      <Arrow {...{ currentPhoto, setCurrent, photosObject }} />
      <Content {...{ photosObject, currentPhoto }} />
      <Arrow {...{ currentPhoto, setCurrent, photosObject, isLeft }} />
    </div>
  );
};

const Content = ({ photosObject, currentPhoto }) =>
  numberOfPhotos(photosObject) === 0 ? (
    <NoPhotosMessage />
  ) : (
    <div className='displayed-photo'>
      <DisplayedPhoto photo={currentPhoto} />
    </div>
  );

const prevPhoto = (currentPhoto, setCurrent, photosObject) => {
  if (currentPhoto === 0) setCurrent(numberOfPhotos(photosObject) - 1);
  else setCurrent(currentPhoto - 1);
};

const nextPhoto = (currentPhoto, setCurrent, photosObject) => {
  if (currentPhoto === numberOfPhotos(photosObject) - 1) setCurrent(0);
  else setCurrent(currentPhoto + 1);
};

const Arrow = ({ currentPhoto, setCurrent, photosObject, isLeft = true }) => {
  const direction = (isLeft) ? 'left' : 'right';
  const clickHandler = (isLeft) ? prevPhoto : nextPhoto;
  return (
    numberOfPhotos(photosObject) > 0 && (
      <div className='arrow-wrapper' id={`${direction}-arrow-wrapper`}>
        <HandDrawnArrow
          data-testid={`${direction}-arrow`}
          id={`${direction}-arrow`}
          onClick={() => clickHandler(currentPhoto, setCurrent, photosObject)}
        />
      </div>
  ));
};

const NoPhotosMessage = () => {
  const language = useSelector((state) => state.language);
  return (
    <div
      className={language}
      data-testid='no-photos-message'
      id='no-photos-message'
    >
      {staticStrings.loadingMessage[language]}
    </div>
  );
};

const DisplayedPhoto = (photoObject) => {
  const photoUrl = getPhotoUrl(photoObject.photo);
  return (
    <img
      className={photoUrl}
      data-testid='photo'
      key={photoObject}
      src={photoUrl}
      alt='test'
    />
  );
};

const numberOfPhotos = (photosObject) => photosObject?.Contents.length || 0;

const getPhotoUrl = (key) => `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom)-min.JPG`;
