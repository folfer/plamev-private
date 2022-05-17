import Image from "next/image";
import { IFooterLayoutProps } from "../data";
import styles from "../Layout/styles.module.scss";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

export const Footer = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IFooterLayoutProps) => {
  return (
    <div className={styles.globalContainer}>
      <FirstSection
        toggleAttendance={toggleAttendance}
        togglePolicies={togglePolicies}
        toggleInstitutional={toggleInstitutional}
        setToggleAttendance={setToggleAttendance}
        setTogglePolicies={setTogglePolicies}
        setToggleInstitutional={setToggleInstitutional}
      />
      <div className={styles.Border} />
      <SecondSection />
    </div>
  );
};
