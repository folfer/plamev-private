import { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import styles from "../Layout/styles.module.scss";
import { PlanDetail } from "./Components/PlanDetail";
import Advance from "../../../../public/advance.png";
import Slim from "../../../../public/slim.png";
import Platinum from "../../../../public/platinum.png";

export const Toppings = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      const MIN_WINDOW_WIDTH = 580;
      const MIN_WINDOW_WIDTH_TABLET = 780;

      if (windowWidth <= MIN_WINDOW_WIDTH) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (windowWidth >= MIN_WINDOW_WIDTH_TABLET) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    }
  }, []);

  return (
    <>
      <section className={styles.firstSection}>
        <div className={styles.wrappedContainers}>
          <div className={styles.firstContainer}>
            {isMobile ? (
              <h1 className={styles.title}>
                Proteja seu pet o ano todo, <br />
                sem passar aperto na <br />
                hora de uma emergência
              </h1>
            ) : (
              <h1 className={styles.title}>
                Viva mais tempo ao lado do seu melhor amigo. <br />
                Com o plano de saúde, você protege seu pet o <br />
                ano todo, sem passar aperto na hora de uma <br /> emergência.
              </h1>
            )}
            <button className={styles.buttonWantProtect}>
              Quero proteger meu pet
            </button>
          </div>
          <div data-aos="zoom-in" className={styles.wrappedSecondContainer}>
            <div className={styles.secondContainer}>
              {isTablet ? (
                <button className={styles.buttonPlay}>
                  <BsPlayFill size={35} color="#fefefe" />
                </button>
              ) : (
                <button className={styles.buttonPlay}>
                  <BsPlayFill size={12} color="#fefefe" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.plan}>
        <div className={styles.insidePlans}>
          <PlanDetail contract={true} />
          {isTablet && (
            <PlanDetail
              initialValue="39,99"
              finalValue="27,99"
              planType="Slim"
              LogoProps={Slim}
              contract={false}
            />
          )}
          <PlanDetail
            initialValue="142,90"
            finalValue="99,99"
            planType="Advance"
            LogoProps={Advance}
            contract={false}
          />
          <PlanDetail
            initialValue="225,70"
            finalValue="157,99"
            planType="Platinum"
            LogoProps={Platinum}
            contract={false}
          />
        </div>
      </div>
    </>
  );
};
