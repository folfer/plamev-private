import * as React from 'react';
import { FieldArray, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from '../Layout/styles.module.scss';
import { ICheckoutLayoutProps } from '../data';
import { useEffect, useState } from 'react';

import { Input } from '../../Input';
import { maskDateBird } from '../../../utils/masks';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

const data = [
  {
    planTitle: 'Slim',
    initialValue: '39,99',
    finalValue: '27,99',
    descriptionPlan: '1',
    bonusPlan: '+ 1 ano de S.O.S Pet',
  },
  {
    planTitle: 'Advance',
    initialValue: '142,84',
    finalValue: '99,99',
    descriptionPlan: '10',
    bonusPlan: '+ VET COMBO',
  },
  {
    planTitle: 'Platinum',
    initialValue: '225,70',
    finalValue: '157,99',
    descriptionPlan: '15',
    bonusPlan: '+ 1 ano de S.O.S Plus',
  },
];

export const Checkout = ({
  handleTakePlanValue,
  handleRegisterPets,
}: ICheckoutLayoutProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [dataPlans, setDataPlans] = useState<any[]>(data);

  const validationFormUserSchema = Yup.object().shape({
    planPatcher: Yup.array().of(
      Yup.object().shape({
        petName: Yup.string().required('*Obrigatório'),
        birthDate: Yup.string().required('*Obrigatório'),
        planNameType: Yup.string().required('*Obrigatório'),
      }),
    ),
  });

  return (
    <Formik
      onSubmit={dataInformation => {
        handleRegisterPets(dataInformation);
        console.log(dataInformation);
      }}
      enableReinitialize
      validationSchema={validationFormUserSchema}
      initialValues={{
        planPatcher: [
          {
            petName: '',
            birthDate: '',
            planNameType: '',
          },
        ],
      }}
    >
      {({ errors, values, touched, initialValues }) => (
        <Form
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          ref={formRef}
        >
          <FieldArray name="planPatcher">
            {({ remove, push }) =>
              values.planPatcher.map((planPatcher, indexPlanPatcher) => (
                <main className={styles.firstContainer} key={indexPlanPatcher}>
                  <div className={styles.checkoutContainer}>
                    <div className={styles.checkout}>
                      <div className={styles.dataContainer}>
                        <h1 className={styles.title}>
                          Digite o nome e a data de nascimento do seu peludinho:
                        </h1>
                        <div className={styles.inputContainer}>
                          <div className={styles.nameInput}>
                            <Input
                              name={`planPatcher[${indexPlanPatcher}].petName`}
                              value={planPatcher.petName}
                              placeholder="Nome do peludinho"
                            />
                          </div>

                          <div className={styles.dateInput}>
                            <Input
                              name={`planPatcher[${indexPlanPatcher}].birthDate`}
                              value={planPatcher.birthDate}
                              placeholder="Data de nascimento"
                              mask={maskDateBird}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.initialPlanContainer}>
                        <h1 className={styles.title}>
                          Escolha um plano com <b>30% de desconto</b> para o seu
                          peludinho:
                        </h1>

                        <div className={styles.plan}>
                          {dataPlans.map((item, index) => (
                            <div key={index} className={styles.planContainer}>
                              <div className={styles.planHeader}>
                                <div className={styles.planType}>
                                  <Field
                                    className={styles.planInput}
                                    id={item.planTitle}
                                    type="radio"
                                    name={`planPatcher[${indexPlanPatcher}].planNameType`}
                                    value={`${item.finalValue}/${item.planTitle}`}
                                  />
                                  <h1 className={styles.planTitle}>
                                    Plano {item.planTitle}
                                  </h1>
                                </div>

                                <div className={styles.planValue}>
                                  <p className={styles.initialValue}>
                                    de <s>R$ {item.initialValue}</s> por:
                                  </p>
                                  <h1 className={styles.finalValue}>
                                    R$ {item.finalValue}
                                  </h1>
                                </div>
                              </div>

                              <div className={styles.planDescription}>
                                <div className={styles.paragraphContainer}>
                                  <p className={styles.paragraph}>
                                    Taxa <b>ZERO</b> de adesão
                                  </p>
                                  <p className={styles.paragraph}>
                                    <b>{item.descriptionPlan}</b> procedimentos
                                    com <b>CARÊNCIA ZERO</b>
                                  </p>
                                  <p className={styles.bonus}>
                                    {item.bonusPlan}
                                  </p>
                                </div>

                                <button className={styles.link}>
                                  <u>ver cobertura</u>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              petName: '',
                              birthDate: '',
                            })
                          }
                          className={styles.outlineButton}
                        >
                          Ganhe 5% de desconto no próximo pet
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              ))
            }
          </FieldArray>
          <div className={styles.buttonContainerWeb}>
            <Link href="/">
              <button className={styles.backButton}>
                <IoIosArrowRoundBack size={35} /> voltar
              </button>
            </Link>
            <button type="submit" className={styles.normalButton}>
              Continuar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
