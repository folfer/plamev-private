import styles from './styles.module.scss';

// const InputField = styled(TextField)({
//   background: 'white',
//   borderRadius: '4px',
// })

export const AccreditedRegistration = () => {
  return (
    <div className={styles.accreditedRegistrationContainer}>
      <h1 className={styles.title}>Lorem ipsum dolor sit</h1>
      <div className={styles.contentContainer}>
        <form action="" className={styles.form}>
          <fieldset className={styles.fieldContent}>
            <legend className={styles.titleContainer}>
              <h1 className={styles.fieldsetTitle}>
                Digite os dados da sua clínica:
              </h1>
            </legend>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder="Nome da clínica (ou responsável):"
              />
            </div>
            <div className={styles.inputContainer}>
              <input type="text" className={styles.input} placeholder="CNPJ" />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder="E-mail"
              />
            </div>

            <div className={styles.CEPContainer}>
              <div className={styles.inputCEPContainer}>
                <input type="text" className={styles.input} placeholder="CEP" />
              </div>
              <button className={styles.buttonCEP}>Não sabe seu CEP?</button>
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder="Endereço"
              />
            </div>

            <div className={styles.addressContainer}>
              <div className={styles.inputNumberContainer}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Número"
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Complemento"
                />
              </div>
            </div>
          </fieldset>
        </form>

        <button className={styles.button} type="submit">
          Cadastrar
        </button>
      </div>
    </div>
  );
};
