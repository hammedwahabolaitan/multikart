import React from 'react';
import Slider from 'react-slick';

const InstagramSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    'public/image/9(1).jpg',
    '/public/image/1(2).jpg',
    '/public/image/3(2).jpg',
    '/public/image/5(2).jpg',
    '/public/image/7(1).jpg',
    '/public/image/5(2).jpg',
    '/public/image/1(2).jpg',
    // '/public/image/1.jpg',
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-6 uppercase" ># instagram</h2>
        <Slider {...settings} className="slick-instagram">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <div className="relative">
                <img src={image} alt={`Instagram ${index}`} className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center hover:bg-[#fc3b3b] hover:bg-opacity-55 ">
                  <i className="pi pi-instagram text-white text-2xl"></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default InstagramSection;

