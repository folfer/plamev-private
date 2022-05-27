import * as React from "react";
import TextField from "@mui/material/TextField";

import styles from "../Layout/styles.module.scss";
import { Plan } from "./components/Plan";
import { PersonalData } from "../../PersonalData";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ICheckoutLayoutProps } from "../data";

export const Checkout = ({ handleNextStep }: ICheckoutLayoutProps) => {
  const [value, setValue] = React.useState<Date | null>(null);

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
                  size="medium"
                  label="Nome do peludinho"
                  variant="outlined"
                />
              </div>

              <div className={styles.dateInput}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data de nascimento"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
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
              <Plan
                planTitle="Plano Slim"
                initialValue="39,99"
                finalValue="27,99"
                descriptionPlan="1"
                bonusPlan="+ 1 ano de S.O.S Pet"
              />
              <Plan
                planTitle="Plano Advance"
                initialValue="142,84"
                finalValue="99,99"
                descriptionPlan="10"
                bonusPlan="+ VET COMBO"
              />
              <Plan
                planTitle="Plano Platinum"
                initialValue="225,70"
                finalValue="157,99"
                descriptionPlan="15"
                bonusPlan="+ 1 ano de S.O.S Plus"
              />
            </div>
          </div>
          <div className={styles.buttonContainerWeb}>
            <button className={styles.outlineButton}>
              Ganhe 5% de desconto no segundo pet
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className={styles.normalButton}
            >
              Continuar
            </button>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.outlineButton}>
            Ganhe 5% de desconto no segundo pet
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className={styles.normalButton}
          >
            Continuar
          </button>
        </div>
      </div>
    </main>
  );
};
