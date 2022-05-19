import { useState, useEffect } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { DoubtsVideo } from "./Components";
import peopleOne from "../../../../public/peopleone.png";
import peopleTwo from "../../../../public/peopletwo.png";
import peopleThree from "../../../../public/peoplethree.png";

import styles from "../Layout/styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export const Doubts = () => {
  const [slidesPerView, setSlidePerView] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      if (windowWidth < 500) {
        setSlidePerView(1);
      } else if (windowWidth < 865) {
        setSlidePerView(2);
      } else {
        setSlidePerView(3);
      }
    }
  }, []);

  return (
    <>
      <div className={styles.firstContainer}>
        <h1 className={styles.title}>
          Ainda tem dúvidas se o plano de saúde é o melhor para seu pet?
        </h1>
        <p className={styles.description}>
          Confira depoimentos de quem já protege o seu melhor amigo e tem com
          quem <br /> contar na hora do aperto!
        </p>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={5}
        slidesPerView={slidesPerView}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.sliderFather}
      >
        <SwiperSlide className={styles.sliderContainerSwap}>
          <DoubtsVideo ImageSrc={peopleOne} />
        </SwiperSlide>
        <SwiperSlide className={styles.sliderContainerSwap}>
          <DoubtsVideo ImageSrc={peopleTwo} />
        </SwiperSlide>
        <SwiperSlide className={styles.sliderContainerSwap}>
          <DoubtsVideo ImageSrc={peopleThree} />
        </SwiperSlide>
        <SwiperSlide className={styles.sliderContainerSwap}>
          <DoubtsVideo ImageSrc={peopleThree} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.wrappedButton}>
        <button className={styles.buttonProtectMyPet}>
          Também quero proteger meu pet
        </button>
      </div>
    </>
  );
};
