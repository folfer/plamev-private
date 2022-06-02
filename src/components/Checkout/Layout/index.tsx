import * as React from 'react';
import TextField from '@mui/material/TextField';

import styles from '../Layout/styles.module.scss';
import { Plan } from './components/Plan';
import { PersonalData } from '../../PersonalData';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ICheckoutLayoutProps } from '../data';
import { useEffect, useState } from 'react';

const data = [
  {
    planTitle: 'Plano Slim',
    initialValue: '39,99',
    finalValue: '27,99',
    descriptionPlan: '1',
    bonusPlan: '+ 1 ano de S.O.S Pet',
  },
  {
    planTitle: 'Plano Advance',
    initialValue: '142,84',
    finalValue: '99,99',
    descriptionPlan: '10',
    bonusPlan: '+ VET COMBO',
  },
  {
    planTitle: 'Plano Platinum',
    initialValue: '225,70',
    finalValue: '157,99',
    descriptionPlan: '15',
    bonusPlan: '+ 1 ano de S.O.S Plus',
  },
];

export const Checkout = ({
  handleNextStep,
  handleTakePlanValue,
  handleTakePetName,
  isSelected,
}: ICheckoutLayoutProps) => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [dataPlans, setDataPlans] = useState<any[]>(data);
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
  }, [isSelected]);

  return (
    <main className={styles.firstContainer}>
      <div className={styles.checkoutContainer}>
        <div className={styles.checkout}>
          <div className={styles.dataContainer}>
            <h1 className={styles.title}>
              Digite o nome e a data de nascimento do seu peludinho:
            </h1>
            <div className={styles.inputContainer}>
              <div className={styles.nameInput}>
                <TextField
                  className={styles.dataInput}
                  size={isMobile ? 'small' : 'medium'}
                  label="Nome do peludinho"
                  variant="outlined"
                  onChange={handleTakePetName}
                />
              </div>

              <div className={styles.dateInput}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data de nascimento"
                    value={value}
                    onChange={newValue => {
                      setValue(newValue);
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className={styles.planContainer}>
            <h1 className={styles.title}>
              Escolha um plano com <b>30% de desconto</b> para o seu peludinho:
            </h1>

            <div className={styles.plan}>
              {dataPlans.map((item, index) => (
                <Plan
                  index={index}
                  key={index}
                  planTitle={item.planTitle}
                  initialValue={item.initialValue}
                  finalValue={item.finalValue}
                  descriptionPlan={item.descriptionPlan}
                  bonusPlan={item.bonusPlan}
                  handleTakePlanValue={handleTakePlanValue}
                />
              ))}
            </div>
          </div>
          <div className={styles.buttonContainerWeb}>
            <button className={styles.outlineButton}>
              Ganhe 5% de desconto no segundo pet
            </button>
            {isSelected ? (
              <button
                type="button"
                onClick={handleNextStep}
                className={styles.normalButton}
              >
                Continuar
              </button>
            ) : (
              <button type="button" className={styles.disableNormalButton}>
                Continuar
              </button>
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.outlineButton}>
            Ganhe 5% de desconto no segundo pet
          </button>
          {isSelected ? (
            <button
              type="button"
              onClick={handleNextStep}
              className={styles.normalButton}
            >
              Continuar
            </button>
          ) : (
            <button type="button" className={styles.disableNormalButton}>
              Continuar
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
