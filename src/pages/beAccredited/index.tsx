
import { Accredited } from '../../components/Accredited';
import { AccreditedBonus } from '../../components/AccreditedBonus';
import { AccreditedDoubts } from '../../components/AccreditedDoubts';
import { AccreditedHelp } from '../../components/AccreditedHelp';
import { AccreditedRegistration } from '../../components/AccreditedRegistration';
import { AccreditedService } from '../../components/AccreditedService';
import { AccreditedVantage } from '../../components/AccreditedVantage';

import { Footer } from '../../components/Footer';

import styles from './styles.module.scss'


export default function BeAccredited() {
  return (
    <div className={styles.accreditedNetwork}>
      <Accredited />
      <AccreditedService />
      <AccreditedVantage />
      <AccreditedBonus />
      <AccreditedDoubts />
      <AccreditedRegistration />
      <AccreditedHelp />
      <Footer />
    </div>

  );
}