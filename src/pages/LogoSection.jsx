
import React from 'react';
import Slider from 'react-slick';

const LogoSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  const logos = [
    '/image/1.png',
    '/image/2.png',
    '/image/3.png',
    '/image/4.png',
    '/image/5.png',
    '/image/6.png',
    '/image/7.png',
    '/image/8.png',
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <Slider {...settings} className="slick-logos">
          {logos.map((logo, index) => (
            <div key={index} className="p-4">
              <div className="logo-block">
                <a>
                  <img src={logo} alt={`Logo ${index}`} className="w-[10vw] object-contain opacity-30 hover:opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSection;