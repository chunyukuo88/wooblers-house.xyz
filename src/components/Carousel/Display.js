import React from "react";
import "../../css/Display.css";
import staticStrings from "../../StaticStrings";
import { useSelector } from "react-redux";
import { ReactComponent as HandDrawnArrow } from "./arrow_button.svg";

export const Display = ({ photosObject }) => {
  const [currentPhotoNumber, setCurrent] = React.useState(0);
  const pointsLeft = false;
  return (
    <div id="display-wrapper">
      <Arrow {...{ currentPhotoNumber, setCurrent, photosObject }} />
      <Content {...{ photosObject, currentPhotoNumber }} />
      <Arrow
        {...{ currentPhotoNumber, setCurrent, photosObject, pointsLeft }}
      />
    </div>
  );
};

const Content = ({ photosObject, currentPhotoNumber }) =>
  numberOfPhotos(photosObject) === 0 ? (
    <NoPhotosMessage />
  ) : (
    <div className="displayed-photo">
      <DisplayedPhoto {...{ photosObject, currentPhotoNumber }} />
    </div>
  );

const prevPhoto = (currentPhotoNumber, setCurrent, photosObject) => {
  if (currentPhotoNumber === 0) {
    setCurrent(numberOfPhotos(photosObject) - 1);
  } else setCurrent(currentPhotoNumber - 1);
};

const nextPhoto = (currentPhotoNumber, setCurrent, photosObject) => {
  if (currentPhotoNumber === numberOfPhotos(photosObject) - 1) {
    setCurrent(0);
  } else setCurrent(currentPhotoNumber + 1);
};

const Arrow = ({
  currentPhotoNumber,
  setCurrent,
  photosObject,
  pointsLeft = true,
}) => {
  const direction = pointsLeft ? "left" : "right";
  const clickHandler = pointsLeft ? prevPhoto : nextPhoto;
  return (
    numberOfPhotos(photosObject) > 0 && (
      <div className="arrow-wrapper" id={`${direction}-arrow-wrapper`}>
        <HandDrawnArrow
          data-testid={`${direction}-arrow`}
          id={`${direction}-arrow`}
          onClick={() =>
            clickHandler(currentPhotoNumber, setCurrent, photosObject)
          }
        />
      </div>
    )
  );
};

const NoPhotosMessage = () => {
  const language = useSelector(({ language }) => language);
  return (
    <div
      className={language}
      data-testid="no-photos-message"
      id="no-photos-message"
    >
      {staticStrings.loadingMessage[language]}
    </div>
  );
};

const DisplayedPhoto = ({ photosObject, currentPhotoNumber }) => {
  const photoUrl = getPhotoUrl(photosObject, currentPhotoNumber);
  return (
    <img
      className={photoUrl}
      data-testid="photo"
      key={currentPhotoNumber}
      src={photoUrl}
      alt="test"
    />
  );
};

const numberOfPhotos = (photosObject) => photosObject?.Contents.length || 0;

const getPhotoUrl = (photosObject, currentPhotoNumber) => {
  const key = photosObject.Contents[currentPhotoNumber]?.["Key"];
  return `${process.env.REACT_APP_FOTO_SOURCE}/${key}`;
};
