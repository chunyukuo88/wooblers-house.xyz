import React from "react";
import "../../css/Display.css";
import staticStrings from "../../StaticStrings";
import { useSelector } from "react-redux";
import { ReactComponent as HandDrawnArrow } from "./arrow_button.svg";

export const Display = ({ photosObject }) => {
  const [currentPhoto, setCurrent] = React.useState(0);

  return (
    <div id="display-wrapper">
      <LeftArrow {...{ currentPhoto, setCurrent, photosObject }} />
      <Content {...{ photosObject, currentPhoto }} />
      <RightArrow {...{ currentPhoto, setCurrent, photosObject }} />
    </div>
  );
};

const Content = ({ photosObject, currentPhoto }) =>
  numberOfPhotos(photosObject) === 0 ? (
    <NoPhotosMessage />
  ) : (
    <div className="photo-wrapper">
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

const LeftArrow = ({ currentPhoto, setCurrent, photosObject }) => {
  return (
    numberOfPhotos(photosObject) > 0 && (
      <div className="arrow-wrapper" id="left-arrow-wrapper">
        <HandDrawnArrow
          data-testid="left-arrow"
          id="left-arrow"
          onClick={() => prevPhoto(currentPhoto, setCurrent, photosObject)}
        />
      </div>
    )
  );
};

const RightArrow = ({ currentPhoto, setCurrent, photosObject }) => {
  return (
    numberOfPhotos(photosObject) > 0 && (
      <div className="arrow-wrapper" id="right-arrow-wrapper">
        <HandDrawnArrow
          data-testid="right-arrow"
          id="right-arrow"
          onClick={() => nextPhoto(currentPhoto, setCurrent, photosObject)}
        />
      </div>
    )
  );
};

const NoPhotosMessage = () => {
  const language = useSelector((state) => state.language);

  return (
    <div
      data-testid="no-photos-message"
      id="no-photos-message"
      className={language}
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
      data-testid="photo"
      key={photoObject}
      src={photoUrl}
      alt="test"
    />
  );
};

const numberOfPhotos = (photosObject) => photosObject?.Contents.length || 0;

const getPhotoUrl = (key) =>
  `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom)-min.JPG`;
