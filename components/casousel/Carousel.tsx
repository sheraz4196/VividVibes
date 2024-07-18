"use client"
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2R1Y3R8ZW58MHx8fHwxNjI2MTg5OTUx&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Premium Nike Footwear',
      price: '$100',
      rating: '★★★★★',
      link: '#',
    },
    {
      img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHwxNjI2MTg5OTUx&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Vintage Film Camera',
      price: '$200',
      rating: '★★★★★',
      link: '#',
    },
    {
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHByb2R1Y3R8ZW58MHx8fHwxNjI2MTg5OTUx&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Cozy Room Essentials',
      price: '$300',
      rating: '★★★☆☆',
      link: '#',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides]); // Added slides as a dependency to useEffect

  return (
    <div className="relative w-full overflow-hidden lg:w-[700px] lg:absolute lg:left-[500px] lg:-top-72">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="min-w-full relative" key={index}>
            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="mt-1">{slide.price} | {slide.rating}</p>
              </div>
              <a href={slide.link} className="text-blue-500 hover:text-white">Buy</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
