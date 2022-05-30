import { MenuItem, Select, TextField } from "@mui/material";
import { BankSlip } from "./components/BankSlip";
import { Card } from "./components/Card";

import styles from "./styles.module.scss";
import Image from "next/image";

import logoCardImg from "../../../../../../public/logo-card.svg";
import chipImg from "../../../../../../public/chip.svg";
import flagImg from "../../../../../../public/flag.svg";
import { useEffect, useState } from "react";

export const PaymentMethods = () => {
  const [selectValue, setSelectValue] = useState<string>("0");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className={styles.paymentMethodsContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Informe os dados de pagamento:</h1>
        <div className={styles.dropdownContainer}>
          <Select className={styles.dropdown} onChange={handleChangeSelect}>
            <MenuItem value="0">Cartão de Crédito</MenuItem>
            <MenuItem value="1">Boleto</MenuItem>
          </Select>
        </div>
        {selectValue === "0" ? <Card /> : <BankSlip />}
      </div>
    </div>
  );
};
