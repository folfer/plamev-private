import { BsChat } from "react-icons/bs";

import styled from "./styles.module.scss";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Checkout } from "../../components/Checkout";
import { Payment } from "../../components/Payment";
import { PersonalData } from "../../components/PersonalData";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

export default function Checkouts() {
  const { newStep } = useAuth();
  const [progressCount, setProgressCount] = useState<number>(0);

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
                      background: `${accomplished ? "#036CC2" : "#B3C9D4"}`,
                    }}
                  >
                    {progressCount >= 30 ? <MdDone /> : 1}
                  </div>
                  <h1 className={styled.titleBalls}>Escolha de planos</h1>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div className={styled.wrappedball}>
                  <div
                    className={styled.ball}
                    style={{
                      background: `${accomplished ? "#036CC2" : "#B3C9D4"}`,
                    }}
                  >
                    {progressCount >= 55 ? <MdDone /> : 2}
                  </div>
                  <h1 className={styled.titleBalls}>Dados pessoais</h1>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div className={styled.wrappedball}>
                  <div
                    className={styled.ball}
                    style={{
                      background: `${accomplished ? "#036CC2" : "#B3C9D4"}`,
                    }}
                  >
                    {progressCount >= 100 ? <MdDone /> : 3}
                  </div>
                  <h1 className={styled.titleBalls}>Pagamentos</h1>
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
        {newStep === 0 && <Checkout />}
        {newStep === 1 && <PersonalData />}
        {newStep === 2 && <Payment />}
      </div>
      {/* <div className={styled.chatButtonContainer}>
        <button className={styled.chatButton}>
          <BsChat size={60} color='#FFF' />
        </button>
      </div> */}
    </div>
  );
}
