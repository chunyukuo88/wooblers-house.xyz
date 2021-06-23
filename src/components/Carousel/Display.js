import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Display = ({ photosObject }) => {
  const [currentPhoto, setCurrent] = React.useState(0);
  const photoArray = photosObject?.Contents;

  const nextSlide = () => {
    setCurrent(
      currentPhoto === photoArray.length - 1
        ? 0
        : currentPhoto + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      currentPhoto === 0
        ? photoArray.length - 1
        : currentPhoto - 1
    );
  };

  return (
    <div>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <DisplayedPhoto photo={currentPhoto}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </div>
  )
};

const DisplayedPhoto = (photoObject) => {
  const photoUrl = getPhotoUrl(photoObject.photo);
  return (
    <img className={photoUrl} data-testid='photo' key={photoObject} src={photoUrl} alt='test'/>
  );
};

const getPhotoUrl = (key) => `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom).JPG`;

// const ErrorMessage = () => {
//   const language = useSelector((state) => state.language);
//   return (
//     <div className={language} data-testid='error-message'>
//       {staticStrings.errorLoadingPhotos[language]}
//     </div>
//   );
// };
