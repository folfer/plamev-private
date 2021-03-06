import Image from 'next/image';
import { IPlanLayoutProps } from '../../data';
import styles from './styles.module.scss';
import Logo from '../../../../../public/advance.png';
import sellerImg from '../../../../../public/seller.svg';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const PlanDetail = ({
  contract,
  initialValue,
  finalValue,
  planType,
  LogoProps,
  mostSeller,
}: IPlanLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    <section className={styles.planDetailContainer} data-aos="flip-right">
      {!contract ? (
        <>
          <div className={styles.wrappedHeader}>
            <div className={styles.header}>
              {planType === 'Slim' ? (
                <div className={styles.imageIconSlim}>
                  <Image
                    src={LogoProps}
                    alt="plamev"
                    width="100%"
                    height="80%"
                  />
                </div>
              ) : (
                <div className={styles.imageIcon}>
                  <Image
                    src={LogoProps}
                    alt="plamev"
                    width="100%"
                    height="100%"
                  />
                </div>
              )}
              <h3 className={styles.headerText}>{planType}</h3>
              {mostSeller && (
                <div className={styles.headerSellerImg}>
                  {' '}
                  <Image src={sellerImg} />{' '}
                </div>
              )}
            </div>
          </div>

          <div className={styles.prices}>
            <div className={styles.insisePrices}>
              <div className={styles.textPrice}>
                de <p className={styles.textPriceOverline}>R${initialValue}</p>{' '}
                por:
              </div>
            </div>
            <p className={styles.finalPrice}>R$ {finalValue}</p>
            {isTablet && (
              <p className={styles.subTitle}>Procedimentos sem car??ncia</p>
            )}
          </div>
          <div className={styles.checkouts}>
            <div className={styles.accept}>
              <AiOutlineCheck size={22} color="#ffffff" />
            </div>
          </div>
          <div className={styles.checkouts}>
            {planType === 'Slim' ? (
              <div className={styles.declined}>
                <MdClose size={22} color="#ffffff" />
              </div>
            ) : (
              <div className={styles.accept}>
                <AiOutlineCheck size={22} color="#ffffff" />
              </div>
            )}
          </div>
          <div className={styles.checkouts}>
            {planType === 'Slim' ? (
              <div className={styles.declined}>
                <MdClose size={22} color="#ffffff" />
              </div>
            ) : (
              <div className={styles.accept}>
                <AiOutlineCheck size={22} color="#ffffff" />
              </div>
            )}
          </div>
          <div className={styles.checkouts}>
            {planType === 'Slim' ? (
              <div className={styles.declined}>
                <MdClose size={22} color="#ffffff" />
              </div>
            ) : planType === 'Advance' ? (
              <div className={styles.declined}>
                <MdClose size={22} color="#ffffff" />
              </div>
            ) : (
              <div className={styles.accept}>
                <AiOutlineCheck size={22} color="#ffffff" />
              </div>
            )}
          </div>
          {!isTablet && (
            <>
              <div className={styles.checkouts}>
                <div className={styles.accept}>
                  <AiOutlineCheck size={22} color="#ffffff" />
                </div>
              </div>
              <div className={styles.checkouts}>
                <div className={styles.declined}>
                  <MdClose size={22} color="#ffffff" />
                </div>
              </div>
              <div className={styles.checkouts}>
                <div className={styles.declined}>
                  <MdClose size={22} color="#ffffff" />
                </div>
              </div>
            </>
          )}
          <div className={styles.wrappedButtonHire}>
            <Link href="/checkouts">
              <button className={styles.hireButton}>Contratar</button>
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.wrappedToppings}>
          <div className={styles.spacing} />
          <div className={styles.firstcheckoutsToppings}>
            {isTablet ? (
              <p className={styles.titleTablet}>
                Prote????o que combina <br /> com seu bolso!
              </p>
            ) : (
              <p>Cobertura</p>
            )}
            {isTablet && (
              <p className={styles.subTitle}>Procedimentos sem car??ncia</p>
            )}
          </div>
          <div className={styles.checkoutsToppings}>
            <p>Cobertura</p>
            {isTablet && (
              <p className={styles.descriptionText}>
                is simply dummy text of the printing <br /> and typesetting
              </p>
            )}
          </div>
          <div className={styles.checkoutsToppings}>
            <p>Cobertura</p>
            {isTablet && (
              <p className={styles.descriptionText}>
                is simply dummy text of the printing <br /> and typesetting
              </p>
            )}
          </div>
          <div className={styles.checkoutsToppings}>
            <p>Cobertura</p>
            {isTablet && (
              <p className={styles.descriptionText}>
                is simply dummy text of the printing <br /> and typesetting
              </p>
            )}
          </div>
          <div className={styles.checkoutsToppings}>
            <p>Cobertura</p>
            {isTablet && (
              <p className={styles.descriptionText}>
                is simply dummy text of the printing <br /> and typesetting
              </p>
            )}
          </div>
          {!isTablet && (
            <>
              <div className={styles.checkoutsToppings}>
                <p>Cobertura</p>
                {isTablet && (
                  <p className={styles.descriptionText}>
                    is simply dummy text of the printing <br /> and typesetting
                  </p>
                )}
              </div>
              <div className={styles.checkoutsToppings}>
                <p>Cobertura</p>
                {isTablet && (
                  <p className={styles.descriptionText}>
                    is simply dummy text of the printing <br /> and typesetting
                  </p>
                )}
              </div>
              <div className={styles.checkoutsToppings}>
                <p>Cobertura</p>
                {isTablet && (
                  <p className={styles.descriptionText}>
                    is simply dummy text of the printing <br /> and typesetting
                  </p>
                )}
              </div>
            </>
          )}
          <div className={styles.spacing} />
        </div>
      )}
    </section>
  );
};
