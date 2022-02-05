import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { useMediaQuery } from "react-responsive";

const ItemSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [itemSlide, setItemSlide] = useState(4);
  const chevronWidth = 20;
  const s1 = "./assets/slider1.png";
  const s2 = "./assets/slider2.png";
  const s3 = "./assets/slider3.png";
  const s4 = "./assets/slider4.png";
  const arrowRight = "./assets/rightarrowS.png";
  const arrowLeft = "./assets/leftarrowS.png";
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });

  useEffect(() => {
    isDesktopOrLaptop ? setItemSlide(4) : setItemSlide(2);
  }, [isDesktopOrLaptop]);

  return (
    <div className="sliderWrapperC">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={itemSlide}
        gutter={20}
        leftChevron={<img src={arrowLeft} className="sliderAction" />}
        rightChevron={<img src={arrowRight} className="sliderAction" />}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="sliderItemC">
          <img src={s1} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s2} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s3} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s4} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s1} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s2} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s3} alt="logo" />
        </div>
        <div className="sliderItemC">
          <img src={s4} alt="logo" />
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default ItemSlider;
