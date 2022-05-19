import Image from "next/image";
import { Navigation, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../Layout/styles.module.scss";

import { IVantageLayoutProps } from "../data";

import familyImg from "../../../../public/family.svg";
import arrowImg from "../../../../public/arrows.svg";
import showerImg from "../../../../public/shower.svg";
import documentImg from "../../../../public/document.svg";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export const Vantage = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IVantageLayoutProps) => {
  const [slidesPerView, setSlidePerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

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

    const windowWidth = window.innerWidth;
    const MIN_WINDOW_WIDTH = 580;

    if (windowWidth <= MIN_WINDOW_WIDTH) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <main>
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Vantagens para seu pet e para seu bolso!
          </h1>
        </div>
        {isMobile ? (
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={5}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className={styles.sliderFather}
          >
            <SwiperSlide className={styles.swiperContainer}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.petsImg}>
                    <Image src={familyImg} alt="família de animais" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>
                      Tem uma família de pets?
                    </h2>
                    <p className={styles.paragraph}>
                      Temos desconto progressivo para proteger todo mundo
                    </p>
                  </div>
                </div>

                <div className={styles.petsDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Tem uma família de pets? Temos desconto progressivo para
                      proteger todo mundo! <br />
                      2° pet = desconto de 5% <br />
                      3° pet = desconto de 10% <br />
                      4° pet = desconto de 15% <br />e do 5º pet em diante ganhe
                      20% de desconto
                    </p>
                    <button className={styles.button}>
                      Quero adicionar mais pet
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperContainer}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.indicationImg}>
                    <Image src={arrowImg} alt="setas" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Indicou, ganhou!</h2>
                    <p className={styles.paragraph}>
                      A cada indicação você pode ganhar R$ 100 de crédito no
                      app.
                    </p>
                  </div>
                </div>

                <div className={styles.indicationDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      A cada indicação você pode ganhar até R$ 100 de crédito no
                      app para pagar a mensalidade ou para usar em serviços,
                      como banho e tosa.
                    </p>
                    <button className={styles.button}>
                      Quero contratar e indicar
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperContainer}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.showerImg}>
                    <Image src={showerImg} alt="banho" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Seu pet cheiroso!</h2>
                    <p className={styles.paragraph}>
                      Ganhe desconto sempre que contratar o banho com tosa com a
                      gente
                    </p>
                  </div>
                </div>

                <div className={styles.showerDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Assine um pacote de banho e tosa no aplicativo Plamev
                      Appet, leve seu peludinho ao pet shop e ganhe reembolso!
                    </p>
                    <button className={styles.button}>
                      Quero meu pet cheiroso
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperContainer}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.reimbursementImg}>
                    <Image src={documentImg} alt="documento" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Vai viajar?</h2>
                    <p className={styles.paragraph}>
                      Leve seu amigo com você e use a modalidade reembolso em
                      qualquer lugar do mundo!
                    </p>
                  </div>
                </div>

                <div className={styles.reimburseDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Leve seu peludinho em suas viagens internacionais e, se
                      precisar de atendimento veterinário, use a modalidade
                      reembolso em qualquer lugar do mundo!
                    </p>
                    <button className={styles.button}>
                      Quero viajar com meu pet
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className={styles.firstContainer}>
            <div className={styles.contentContainer}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.petsImg}>
                    <Image src={familyImg} alt="família de animais" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>
                      Tem uma família de pets?
                    </h2>
                    <p className={styles.paragraph}>
                      Temos desconto progressivo para proteger todo mundo
                    </p>
                  </div>
                </div>

                <div className={styles.petsDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Tem uma família de pets? Temos desconto progressivo para
                      proteger todo mundo! <br />
                      2° pet = desconto de 5% <br />
                      3° pet = desconto de 10% <br />
                      4° pet = desconto de 15% <br />e do 5º pet em diante ganhe
                      20% de desconto
                    </p>
                    <button className={styles.button}>
                      Quero adicionar mais pet
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.indicationImg}>
                    <Image src={arrowImg} alt="setas" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Indicou, ganhou!</h2>
                    <p className={styles.paragraph}>
                      A cada indicação você pode ganhar R$ 100 de crédito no
                      app.
                    </p>
                  </div>
                </div>

                <div className={styles.indicationDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      A cada indicação você pode ganhar até R$ 100 de crédito no
                      app para pagar a mensalidade ou para usar em serviços,
                      como banho e tosa.
                    </p>
                    <button className={styles.button}>
                      Quero contratar e indicar
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.showerImg}>
                    <Image src={showerImg} alt="banho" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Seu pet cheiroso!</h2>
                    <p className={styles.paragraph}>
                      Ganhe desconto sempre que contratar o banho com tosa com a
                      gente
                    </p>
                  </div>
                </div>

                <div className={styles.showerDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Assine um pacote de banho e tosa no aplicativo Plamev
                      Appet, leve seu peludinho ao pet shop e ganhe reembolso!
                    </p>
                    <button className={styles.button}>
                      Quero meu pet cheiroso
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.reimbursementImg}>
                    <Image src={documentImg} alt="documento" />
                  </div>
                  <div className={styles.textContainer}>
                    <h2 className={styles.benefitsTitle}>Vai viajar?</h2>
                    <p className={styles.paragraph}>
                      Leve seu amigo com você e use a modalidade reembolso em
                      qualquer lugar do mundo!
                    </p>
                  </div>
                </div>

                <div className={styles.reimburseDescription}>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionParagraph}>
                      Leve seu peludinho em suas viagens internacionais e, se
                      precisar de atendimento veterinário, use a modalidade
                      reembolso em qualquer lugar do mundo!
                    </p>
                    <button className={styles.button}>
                      Quero viajar com meu pet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.benefitsContainer}></div>
      </div>
    </main>
  );
};
