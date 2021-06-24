import React from 'react';
import '../../css/Display.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Display = ({ photosObject }) => {
  const [currentPhoto, setCurrent] = React.useState(0);

  return (
    <div id='display-wrapper'>
      <div className='arrow-wrapper' onClick={()=>prevPhoto(currentPhoto, setCurrent, photosObject)}>
        <FaArrowAltCircleLeft
          data-testid='left-arrow'
          size='1x'
          />
      </div>
      <div className='photo-wrapper'>
        <DisplayedPhoto photo={currentPhoto}/>
      </div>
      <div className='arrow-wrapper'>
        <FaArrowAltCircleRight
          data-testid='right-arrow'
          size='1x'
          onClick={()=>nextPhoto(currentPhoto, setCurrent, photosObject)} />
      </div>
    </div>
  );
};

const DisplayedPhoto = (photoObject) => {
  const photoUrl = getPhotoUrl(photoObject.photo);
  return (
    <img className={photoUrl}
         data-testid='photo'
         key={photoObject}
         src={photoUrl}
         alt='test'/>
  );
};

const prevPhoto = (currentPhoto, setCurrent, photosObject) => {
  if (currentPhoto === 0) setCurrent(numberOfPhotos(photosObject) - 1);
  else setCurrent(currentPhoto - 1);
};

const numberOfPhotos = (photosObject) => photosObject?.Contents.length || 0;

const nextPhoto = (currentPhoto, setCurrent, photosObject) => {
  if (currentPhoto === numberOfPhotos(photosObject) - 1) setCurrent(0);
  else setCurrent(currentPhoto + 1);
}

const getPhotoUrl = (key) => `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom).JPG`;

// const ErrorMessage = () => {
//   const language = useSelector((state) => state.language);
//   return (
//     <div className={language} data-testid='error-message'>
//       {staticStrings.errorLoadingPhotos[language]}
//     </div>
//   );
// };
