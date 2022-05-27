import * as React from "react";
import { FiAlertCircle } from 'react-icons/fi'
import { TextField } from '@mui/material';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import styles from './styles.module.scss';

import alertImg from '../../../../../../../../public/alert.svg'

export const BankSlip = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <div className={styles.firstContainer}>
      <div className={styles.dateInput}>
        <LocalizationProvider className={styles.localizationProvider} dateAdapter={AdapterDateFns}>
          <DatePicker className={styles.input}
            label="Data"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      <div className={styles.slipBankDataContainer}>
        <div className={styles.dataContainer}>
          <h1 className={styles.dataTitle}>Dados do boleto</h1>
          <p className={styles.dataParagraph}>12341234123412341234123412341234124112341234</p>
          <button className={styles.dataButton}>Copiar código do boleto</button>
          <a className={styles.dataLink} href="">Fazer download do boleto</a>
        </div>

        <div className={styles.alertContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.alert}>
              <FiAlertCircle size={29} color="#FF451A" />
            </div>
            <h1 className={styles.alertTitle}>Atente-se aos detalhes:</h1>
          </div>

          <ul className={styles.list}>
            <li>Boleto (somente à vista).</li>
            <li>A data selecionada é a data de pagamento de todas as mensalidades.</li>
            <li>Pagamento com Boleto Bancário leva 3 dias úteis para ser compensado.</li>
            <li>Atente-se a data de vencimento do boleto. Você pode pagar o boleto em qualquer banco ou casa lotérica até o dia do vencimento.</li>
            <li>Depois do pagamento, verifique seu e-mail para receber as orientações para ativação do plano.</li>
          </ul>
        </div>
      </div>

      <section className={styles.sectionContainer}>
        <div className={styles.termsContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <p className={styles.paragraphTerms}>Li e estou de acordo com o <a className={styles.linkTerms} href="">Contrato</a>
          </p>
        </div>
        <button className={styles.bankSlipButton}>Gerar boleto</button>
      </section>
    </div>
  );
}