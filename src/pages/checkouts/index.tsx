import { IoIosArrowRoundBack } from 'react-icons/io';

import styled from './styles.module.scss';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { Checkout } from '../../components/Checkout';
import { Payment } from '../../components/Payment';
import { PersonalData } from '../../components/PersonalData';
import { useAuth } from '../../hooks/AuthContext';
import { useEffect, useState } from 'react';
import { MdDone } from 'react-icons/md';

export default function Checkouts() {
  const { newStep, setNewStep } = useAuth();
  const [progressCount, setProgressCount] = useState<number>(0);
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

  useEffect(() => {
    if (newStep === 0) {
      setProgressCount(25);
    } else if (newStep === 1) {
      setProgressCount(50);
    } else if (newStep === 2) {
      setProgressCount(100);
    }
  }, [newStep]);

  return (
    <div className={styled.firstGlobalContainer}>
      <div className={styled.wrappedContainers}>
        <div className={styled.checkoutHeader}>
          <h1 className={styled.titleCheckout}>
            Uhu! Falta pouco para você proteger a saúde do seu pet!
          </h1>
        </div>
        <div className={styled.secondContainer}>
          <ProgressBar percent={progressCount} filledBackground="#036CC2">
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div className={styled.wrappedball}>
                  <div
                    className={styled.ball}
                    style={{
                      background: `${accomplished ? '#036CC2' : '#B3C9D4'}`,
                    }}
                  >
                    {progressCount >= 30 ? <MdDone /> : 1}
                  </div>
                  <h1 className={styled.titleBalls}>
                    {isMobile ? 'Planos' : 'Escolha de planos'}
                  </h1>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div className={styled.wrappedball}>
                  <div
                    className={styled.ball}
                    style={{
                      background: `${accomplished ? '#036CC2' : '#B3C9D4'}`,
                    }}
                  >
                    {progressCount >= 55 ? <MdDone /> : 2}
                  </div>
                  <h1 className={styled.titleBalls}>
                    {isMobile ? 'Dados' : 'Dados pessoais'}
                  </h1>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div className={styled.wrappedball}>
                  <div
                    className={styled.ball}
                    style={{
                      background: `${accomplished ? '#036CC2' : '#B3C9D4'}`,
                    }}
                  >
                    {progressCount >= 100 ? <MdDone /> : 3}
                  </div>
                  <h1 className={styled.titleBalls}>
                    {isMobile ? 'Pagamento' : 'Pagamentos'}
                  </h1>
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
        {newStep === 0 && <Checkout />}
        {newStep === 1 && (
          <div>
            <PersonalData />
            <button className={styled.backButton} onClick={() => setNewStep(0)}>
              <IoIosArrowRoundBack size={35} /> voltar
            </button>
          </div>
        )}
        {newStep === 2 && (
          <div>
            <Payment />
            <button className={styled.backButton} onClick={() => setNewStep(1)}>
              <IoIosArrowRoundBack size={35} /> voltar
            </button>
          </div>
        )}
      </div>
      {/* <div className={styled.chatButtonContainer}>
        <button className={styled.chatButton}>
          <BsChat size={60} color='#FFF' />
        </button>
      </div> */}
    </div>
  );
}
