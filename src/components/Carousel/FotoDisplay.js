import React from 'react';
// import '../../css/carousel.css';
// import urls, { getFotoSource } from '../../urls';
import { getFotos } from './photoCount';

export default function FotoDisplay(){
  const [ fotosObject, setFotos ] = React.useState();

  React.useEffect(async ()=>{
    const fotos = await getFotos();
    setFotos(fotos);
  }, []);

  const display = (fotosObj) => {
    const { Contents } = fotosObj;
    return Contents.map((obj, key) => {
      console.log('fotosObject: ', fotosObj.Contents[key]);
      return (
        <div>
          <img src={obj.Key} key={key} alt='test'/>
        </div>
      );
    });
  }

  return (
    <>
      {display(fotosObject)}
    </>
  );
};

//
// const _fetchCaptions = async (captionsSetter) => {
//   const result = await fetch(urls.captions).then(res => res.text());
//   const arr = result.split('\n');
//   captionsSetter(arr);
// };
