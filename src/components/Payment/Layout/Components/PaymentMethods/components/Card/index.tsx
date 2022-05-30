import Image from "next/image";

import styles from "./styles.module.scss";

import logoCardImg from "../../../../../../../../public/logo-card.svg";
import chipImg from "../../../../../../../../public/chip.svg";
import flagImg from "../../../../../../../../public/flag.svg";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export const Card = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardValid, setCardValid] = useState<string>("");
  const [cardCvv, setCardCvv] = useState<string>("");
  const [cvvExist, setCvvExit] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [selectValue, setSelectValue] = useState<string>("");

  const handleChangeCardNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value);
  };

  const handleChangeCardName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
  };

  const handleChangeCardCvv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvv(event.target.value);
  };

  const handleChangeCardValid = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardValid(event.target.value);
  };

  useEffect(() => {
    if (cardCvv.length >= 1) {
      setCvvExit(true);
    } else {
      setCvvExit(false);
    }

    // TODO: Create function for get user location.
    // if (window.navigator.geolocation) {
    //   window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    // }
  }, [cardCvv]);
  return (
    <div className={styles.firstContainer}>
      {!cvvExist && (
        <div className={styles.cardContainer}>
          <div className={styles.logoCardContainer}>
            <Image src={logoCardImg} alt="logomarca plamev do cartão" />
          </div>
          <div className={styles.chipContainer}>
            <Image src={chipImg} alt="plamev" />
          </div>

          <h1 className={styles.numberCard}>
            {cardNumber
              ? cardNumber.match(/.{1,4}/g).join(" ")
              : "XXXX XXXX XXXX XXXX"}
          </h1>
          <div className={styles.dataCardContainer}>
            <div className={styles.dataCard}>
              <div className={styles.data}>
                <strong className={styles.dataTitleCard}>Nome</strong>
                <p className={styles.paragraph}>
                  {cardName ? cardName : "Nome do cartão"}
                </p>
              </div>
              <div className={styles.data}>
                <strong className={styles.dataTitleCard}>Validade</strong>
                <p className={styles.paragraph}>
                  {cardValid ? cardValid.match(/.{1,2}/g).join("/") : "00/00"}
                </p>
              </div>
            </div>
            <div className={styles.flagContainer}>
              <Image src={flagImg} alt="plamev" />
            </div>
          </div>
        </div>
      )}
      {cvvExist && (
        <div className={styles.backCardContainer}>
          <div className={styles.magnetic} />
          <div className={styles.backData}>
            <div className={styles.paragraphContainer}>
              <p className={styles.paragraphCVV}>CVV</p>
              <p className={styles.numberCVV}>{cardCvv ? cardCvv : "123"}</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.inputContainer}>
        <TextField
          className={styles.dataInput}
          size={isMobile ? "small" : "medium"}
          label="Número do cartão"
          value={cardNumber}
          inputProps={{ maxLength: 16 }}
          onChange={handleChangeCardNumber}
          variant="outlined"
        />
      </div>
      <div className={styles.inputContainer}>
        <TextField
          className={styles.dataInput}
          size={isMobile ? "small" : "medium"}
          value={cardName}
          onChange={handleChangeCardName}
          label="Nome do cartão"
          inputProps={{ maxLength: 32 }}
          variant="outlined"
        />
      </div>
      <div className={styles.inputDataCard}>
        <div className={styles.inputValidityContainer}>
          <TextField
            className={styles.dataInput}
            size={isMobile ? "small" : "medium"}
            label="Validade"
            value={cardValid}
            inputProps={{ maxLength: 4 }}
            onChange={handleChangeCardValid}
            variant="outlined"
          />
        </div>
        <div className={styles.inputCVVContainer}>
          <TextField
            className={styles.dataInput}
            size={isMobile ? "small" : "medium"}
            label="CVV"
            variant="outlined"
            inputProps={{ maxLength: 3 }}
            value={cardCvv}
            onChange={handleChangeCardCvv}
          />
        </div>
      </div>
    </div>
  );
};
