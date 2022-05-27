import Image from 'next/image';

import styles from './styles.module.scss'

import logoCardImg from '../../../../../../../../public/logo-card.svg'
import chipImg from '../../../../../../../../public/chip.svg'
import flagImg from '../../../../../../../../public/flag.svg'
import { TextField } from '@mui/material';

export const Card = () => {
  return (
    <div className={styles.firstContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.logoCardContainer}>
          <Image src={logoCardImg} alt="logomarca plamev do cartão" />
        </div>

        <div className={styles.chipContainer}>
          <Image src={chipImg} />
        </div>

        <h1 className={styles.numberCard}>XXXX XXXX XXXX XXXX</h1>

        <div className={styles.dataCardContainer}>
          <div className={styles.dataCard}>
            <div className={styles.data}>
              <strong className={styles.dataTitleCard}>Name</strong>
              <p className={styles.paragraph}>Nome do cartão</p>
            </div>
            <div className={styles.data}>
              <strong className={styles.dataTitleCard}>Validade</strong>
              <p className={styles.paragraph}>00/00</p>
            </div>
          </div>
          <div className={styles.flagContainer}>
            <Image src={flagImg} />
          </div>
        </div>
      </div>

      <div className={styles.backCardContainer}>
        <div className={styles.magnetic}></div>
        <div className={styles.backData}>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraphCVV}>CVV</p>
            <p className={styles.numberCVV}>123</p>
          </div>
        </div>
      </div>

      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.dataInput}
            size="small"
            label="Número do cartão"
            variant="outlined"
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.dataInput}
            size="small"
            label="Nome do cartão"
            variant="outlined"
          />
        </div>

        <div className={styles.inputDataCard}>
          <div className={styles.inputValidityContainer}>
            <TextField
              className={styles.dataInput}
              size="small"
              label="Validade"
              variant="outlined"
            />
          </div>
          <div className={styles.inputCVVContainer}>
            <TextField
              className={styles.dataInput}
              size="small"
              label="CVV"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}