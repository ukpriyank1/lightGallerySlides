import LightGallery from 'lightgallery/react';
import './carasoul.module.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';
import { useRef, useState, useCallback, useEffect } from 'react';

const Carasoul = () => {
  const lightGallery = useRef;
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-800',
      src: '/assets/flower.webp',
      thumb: 'thumb-1.jpg',
    },
    {
      id: '2',
      size: '1400-800',
      src: '/assets/apple.webp',
      thumb: 'thumb-2.jpg',
    },
  ]);

  const addItem = useCallback(() => {
    setItems([
      ...items,
      {
        id: '5',
        size: '1400-800',
        src: '/assets/nature.avif',
        thumb: 'thumb-5.jpg',
      },
      {
        id: '6',
        size: '1400-800',
        src: '/assets/pexels-photo-792416.jpg',
        thumb: 'thumb-6.jpg',
      },
    ]);
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <div
          key={item.id}
          data-lg-size={item.size}
          className='gallery-item'
          data-src={item.src}
        >
          <Image
            className='img-responsive'
            src={item.src}
            alt='identity'
            width='200'
            height='200'
          />
        </div>
      );
    });
  }, [items]);

  useEffect(() => {
    lightGallery.current.refresh();
  }, [items]);

  return (
    <div className='App'>
      <button onClick={addItem}>Add new item</button>
      <LightGallery
        plugins={[lgZoom]}
        elementClassNames='custom-class-name'
        onInit={onInit}
        className='image-slides'
      >
        {getItems()}
      </LightGallery>
    </div>
  );
};

export default Carasoul;
