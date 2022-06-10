import Image from 'next/image';
import { useRouter } from 'next/router';
import { IHeaderLayoutProps } from '../data';
import styles from '../Layout/styles.module.scss';
import Logo from '../../../../public/logo-white.svg';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineBarcode } from 'react-icons/ai';
import { GiHospital } from 'react-icons/gi';
import { BsPeople } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { RiMenuFoldFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

export const Header = ({
  isOpenFastAccess,
  toggleFastAccess,
  toggleMenu,
  isOpenMenuMobile,
}: IHeaderLayoutProps) => {
  const router = useRouter();

  return (
    <div className={styles.firstContainer}>
      <div className={styles.ImageLogo}>
        <Link href="/">
          <Image src={Logo} alt="Plamev" />
        </Link>
      </div>
      <div>
        <nav className={styles.navBar}>
          <div className={styles.navItem}>
            <Link href="/">Nossos planos</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/">Rede credenciada</Link>
          </div>
          <div
            className={
              router.asPath === '/beAccredited'
                ? styles.navItemActive
                : styles.navItem
            }
          >
            <Link href="/beAccredited">Seja um credenciado</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/">Quem somos</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/">Blog</Link>
          </div>
        </nav>
      </div>
      <div className={styles.containerLogin}>
        <button className={styles.fastAccess} onClick={toggleFastAccess}>
          Acesso rápido <MdKeyboardArrowDown size={20} />
        </button>
        <div className={styles.bar} />
        <button type="button" className={styles.loginButton}>
          Login
        </button>
      </div>
      {isOpenFastAccess && (
        <div className={styles.accessContainer}>
          <div className={styles.accessBox}>
            <button type="button" className={styles.accessButton}>
              <AiOutlineBarcode size={25} color="#505458" /> 2º via de boleto
            </button>
            <button type="button" className={styles.accessButtonHospital}>
              <GiHospital size={25} color="#505458" /> Clínicas <br />{' '}
              credenciadas
            </button>
            <button type="button" className={styles.accessButton}>
              <BsPeople size={25} color="#505458" />
              Trabalhe conosco
            </button>
          </div>
        </div>
      )}
      <div className={styles.loginMobile}>
        <button type="button" className={styles.loginMobileButton}>
          <BiUserCircle color="#ffffff" size={35} />
          Login
        </button>
        <button type="button" onClick={toggleMenu}>
          <FiMenu color="#ffffff" size={35} />
        </button>
      </div>
      {isOpenMenuMobile && (
        <div className={styles.menuMobile}>
          <div className={styles.insideMenuMobile}>
            <div className={styles.menuMobileButton}>
              <button type="button" onClick={toggleMenu}>
                <RiMenuFoldFill color="#ffffff" size={35} />
              </button>
            </div>
            <nav className={styles.navMenu}>
              <div
                className={
                  router.asPath === '/checkouts'
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <Link href="/checkouts">Nossos planos</Link>
              </div>
              <div
                className={
                  router.asPath === '/beAccredited'
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <Link href="/beAccredited">Rede credenciada</Link>
              </div>
              <div className={styles.navItem}>
                <Link href="/">Seja um credenciado</Link>
              </div>
              <div className={styles.navItem}>
                <Link href="/">Quem somos</Link>
              </div>
              <div className={styles.navItem}>
                <Link href="/">Blog</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
