import { IApplicationLayoutProps } from "../data";
import styles from "../Layout/styles.module.scss";

export const Application = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IApplicationLayoutProps) => {
  return (
    <main className={styles.firstContainer}>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h1>No aplicativo Plamev Appet você acessa todos os benefícios do plano do seu amigo a 1 clique:</h1>
            <ul>
              <li>Agenda Pet</li>
              <li>Rede Crendenciada</li>
              <li>Extrato Financeiro</li>
              <li>Reembolso</li>
              <li>Pet Educação</li>
              <li>Saúde em dia e muito mais...</li>
            </ul>
          </div>
          <button>Contrate sem burocracia</button>
        </div>
      </section>

      <div className={styles.phoneImg}>
        <span>
        </span>
        {/* <div>
          <span className={styles.start}>
            <img src="/start.svg" />
          </span>
        </div> */}
      </div>
    </main>
  );
};
