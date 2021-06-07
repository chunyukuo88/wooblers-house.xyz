import React, { useState, useEffect } from 'react';
import '../../css/carousel.css';
import urls, { getFotoSource } from '../../urls';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';

/**
 * Dynamically populating the contents of <CarouselDisplay> is not possible with the react-responsive-carousel
 * library. Doing so results in browser console errors and the images show up but the captions bunch up.
 * */

export default function FotoDisplay(){
  const [ captions, setCaptions ] = useState([]);

  useEffect(() => {
    _fetchCaptions(setCaptions);
  }, []);

    return(
    <CarouselDisplay>
      <div>
        <img alt="" src={getFotoSource(1)} />
        <p className="legend">{captions[0]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(2)} />
        <p className="legend">{captions[1]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(3)} />
        <p className="legend">{captions[2]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(4)} />
        <p className="legend">{captions[3]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(5)} />
        <p className="legend">{captions[4]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(6)} />
        <p className="legend">{captions[5]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(7)} />
        <p className="legend">{captions[6]}</p>
      </div>
      <div>
        <img alt="" src={getFotoSource(8)} />
        <p className="legend">{captions[7]}</p>
      </div>
    </CarouselDisplay>
  );
}

const _fetchCaptions = async (captionsSetter) => {
  const result = await fetch(urls.captions).then(res => res.text());
  const arr = result.split('\n');
  captionsSetter(arr);
};
