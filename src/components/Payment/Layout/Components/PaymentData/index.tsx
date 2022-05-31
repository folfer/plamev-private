import { OutlinedInput, Select, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import apiCep from "../../../../../services/apiCep";

import styles from "./styles.module.scss";

interface IAddressData {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

export const PaymentData = () => {
  const [getCep, setGetCep] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [addressData, setAddressData] = useState<IAddressData>();
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

  useEffect(() => {
    if (getCep.length >= 8) {
      apiCep
        .get(`${getCep}/json/`)
        .then((response) => {
          setAddressData(response.data);
        })
        .catch((err) => {
          console.log(err.response.status);
        });
    }
  }, [getCep]);

  const handleChangeCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetCep(event.target.value);
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handleChangeNeighborhood = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNeighborhood(event.target.value);
  };

  return (
    <div className={styles.personalDataContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Complete seus dados:</h1>

        <div className={styles.inputCPFContainer}>
          <TextField
            className={styles.dataInput}
            size={isMobile ? "small" : "medium"}
            label="CPF"
            variant="outlined"
          />
        </div>
        <div className={styles.CEPContainer}>
          <div className={styles.inputCEPContainer}>
            <TextField
              className={styles.dataInput}
              size={isMobile ? "small" : "medium"}
              label="CEP"
              variant="outlined"
              inputProps={{ maxLength: 8 }}
              value={getCep}
              onChange={handleChangeCep}
            />
          </div>

          <p className={styles.paragraph}>Não sabe seu CEP?</p>
        </div>

        <div className={styles.addressContainer}>
          <div className={styles.inputAddressContainer}>
            <TextField
              className={styles.dataInput}
              size={isMobile ? "small" : "medium"}
              label="Endereço"
              value={addressData ? addressData?.logradouro : address}
              variant="outlined"
              onChange={handleChangeAddress}
            />
          </div>

          <div className={styles.inputNumberContainer}>
            <TextField
              className={styles.dataInput}
              size={isMobile ? "small" : "medium"}
              label="Número"
              variant="outlined"
            />
          </div>
        </div>

        <div className={styles.addressContainer}>
          <div className={styles.inputComplementContainer}>
            <TextField
              className={styles.dataInput}
              size={isMobile ? "small" : "medium"}
              label="Complemento"
              variant="outlined"
            />
          </div>

          <div className={styles.inputAddressContainer}>
            <TextField
              className={styles.dataInput}
              size={isMobile ? "small" : "medium"}
              label="Bairro"
              value={addressData ? addressData?.bairro : neighborhood}
              variant="outlined"
              onChange={handleChangeNeighborhood}
            />
          </div>
        </div>

        <div className={styles.addressContainer}>
          <div className={styles.dropdownContainer}>
            <Select
              className={styles.dropdown}
              displayEmpty
              renderValue={() => {
                return <em>{addressData ? addressData?.uf : "Estado"}</em>;
              }}
            >
              <MenuItem key={addressData?.uf} value={addressData?.uf}>
                {addressData?.uf}
              </MenuItem>
            </Select>
          </div>

          <div className={styles.dropdownContainer}>
            <Select
              className={styles.dropdown}
              displayEmpty
              renderValue={() => {
                return (
                  <em>{addressData ? addressData?.localidade : "Cidade"}</em>
                );
              }}
            >
              <MenuItem
                key={addressData?.localidade}
                value={addressData?.localidade}
              >
                {addressData?.localidade}
              </MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
