import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Display = ({ photosObject }) => {
  const [currentPhoto, setCurrent] = React.useState(0);

  return (
    <div>
      <FaArrowAltCircleLeft
        className='left-arrow'
        data-testid='left-arrow'
        onClick={()=>prevPhoto(currentPhoto, setCurrent, photosObject)} />
      <DisplayedPhoto photo={currentPhoto}/>
      <FaArrowAltCircleRight
        className='right-arrow'
        data-testid='right-arrow'
        onClick={()=>nextPhoto(currentPhoto, setCurrent, photosObject)} />
    </div>
  )
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
