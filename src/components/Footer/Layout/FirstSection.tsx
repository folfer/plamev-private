import Image from "next/image";
import React from "react";
import styles from "../Layout/styles.module.scss";
import Logo from "../../../../public/logo-blue.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IFirstSectionLayoutProps } from "../data";
import Link from "next/link";

export const FirstSection = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IFirstSectionLayoutProps) => {
  return (
    <section className={styles.firstContainer}>
      <div className={styles.wrappedLogoContainer}>
        <div className={styles.ImageLogo}>
          <Image src={Logo} alt="Plamev" />
        </div>
        <div className={styles.stickBar} />
        <h1 className={styles.textLogo}>
          cuidar <br /> e da voz
        </h1>
      </div>
      <div className={styles.wrappedMenuContainer}>
        <div
          className={styles.wrappedItemMenu}
          onClick={() => setToggleAttendance(!toggleAttendance)}
        >
          <strong>Atendimento</strong>
          <div className={styles.IconArrow}>
            {!toggleAttendance ? (
              <MdKeyboardArrowDown color="#504F4B" size={25} />
            ) : (
              <MdKeyboardArrowUp color="#504F4B" size={25} />
            )}
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">Central de atendimento</Link>
            <Link href="/">Assessoria de imprensa</Link>
          </div>
        </div>
        {toggleAttendance && (
          <div className={styles.wrappedItemMenuInvisible}>
            <Link href="/">Central de atendimento</Link>
            <Link href="/">Assessoria de imprensa</Link>
          </div>
        )}

        <div
          className={styles.wrappedItemMenu}
          onClick={() => setTogglePolicies(!togglePolicies)}
        >
          <strong>Políticas</strong>
          <div className={styles.IconArrow}>
            {!togglePolicies ? (
              <MdKeyboardArrowDown color="#504F4B" size={25} />
            ) : (
              <MdKeyboardArrowUp color="#504F4B" size={25} />
            )}
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">Aviso de privacidade</Link>
            <Link href="/">Política de Cookies</Link>
          </div>
        </div>
        {togglePolicies && (
          <div className={styles.wrappedItemMenuInvisible}>
            <Link href="/">Aviso de privacidade</Link>
            <Link href="/">Política de Cookies</Link>
          </div>
        )}
        <div
          className={styles.wrappedItemMenu}
          onClick={() => setToggleInstitutional(!toggleInstitutional)}
        >
          <strong>Institucional</strong>
          <div className={styles.IconArrow}>
            {!toggleInstitutional ? (
              <MdKeyboardArrowDown color="#504F4B" size={25} />
            ) : (
              <MdKeyboardArrowUp color="#504F4B" size={25} />
            )}
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">A Plamev Pet</Link>
            <Link href="/">Trabalhe conosco</Link>
          </div>
        </div>
        {toggleInstitutional && (
          <div className={styles.wrappedItemMenuInvisible}>
            <Link href="/">A Plamev Pet</Link>
            <Link href="/">Trabalhe conosco</Link>
          </div>
        )}
      </div>
      <div className={styles.wrappedMenuContainerOnDesktop}>
        <div className={styles.wrappedItemMenu}>
          <strong>Atendimento</strong>
          <div className={styles.IconArrow}>
            <MdKeyboardArrowDown color="#504F4B" size={25} />
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">Central de atendimento</Link>
            <Link href="/">Assessoria de imprensa</Link>
          </div>
        </div>

        <div className={styles.wrappedItemMenu}>
          <strong>Políticas</strong>
          <div className={styles.IconArrow}>
            <MdKeyboardArrowDown color="#504F4B" size={25} />
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">Aviso de privacidade</Link>
            <Link href="/">Política de Cookies</Link>
          </div>
        </div>

        <div className={styles.wrappedItemMenu}>
          <strong>Institucional</strong>
          <div className={styles.IconArrow}>
            <MdKeyboardArrowDown color="#504F4B" size={25} />
          </div>
          <div className={styles.visibleOnDesktop}>
            <Link href="/">A Plamev Pet</Link>
            <Link href="/">Trabalhe conosco</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
