import { useEffect, useState } from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Doubts } from './Components/Doubts';
import styles from './styles.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';

import PeopleOne from '../../../../public/acPeopleOne.png';
import PeopleTwo from '../../../../public/acPeopleTwo.png';
import PeopleThree from '../../../../public/acPeopleThree.png';

export const AccreditedDoubts = () => {
  const [slidesPerView, setSlidePerView] = useState(4);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    <div className={styles.accreditedDoubtsContainer}>
      <div className={styles.doubtsTextContainer}>
        <h1 className={styles.doubtsTitle}>
          Ainda tem dúvidas sobre se tornar um credenciado?
        </h1>
        <p className={styles.doubtsParagraph}>
          Confira depoimentos de quem já é um credenciado Plamev Pet
        </p>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        navigation
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.sliderFather}
      >
        <SwiperSlide className={styles.sliderContainerSwap}>
          <Doubts
            bgImage={PeopleOne}
            userName="Renato"
            clinic="Clínica Mister Zoom"
            timeAccredited={2}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.sliderContainerSwap}>
          <Doubts
            bgImage={PeopleTwo}
            userName="Marcela"
            clinic="Clínica Pets+"
            timeAccredited={2}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.sliderContainerSwap}>
          <Doubts
            bgImage={PeopleThree}
            userName="Barbara"
            clinic="Clínica Mister Zoom"
            timeAccredited={2}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.sliderContainerSwap}>
          <Doubts
            bgImage={PeopleThree}
            userName="Barbara"
            clinic="Clínica Mister Zoom"
            timeAccredited={2}
          />
        </SwiperSlide>
      </Swiper>

      <button className={styles.doubtsButton}>Quero ser um credenciado</button>
    </div>
  );
};
