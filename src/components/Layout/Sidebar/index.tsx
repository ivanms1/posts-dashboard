import { useState } from "react";

import Section from "./Section";

import { SIDEBAR_SECTIONS } from "../../../const";

import styles from "./Sidebar.module.scss";

function Sidebar() {
  const [currentSection, setCurrentSection] = useState(
    "daily-best.routine-help"
  );
  return (
    <div className={styles.Sidebar}>
      {SIDEBAR_SECTIONS.map((section) => (
        <Section
          currentSection={currentSection}
          key={section.id}
          section={section}
          selectSection={(id: string) => setCurrentSection(id)}
        />
      ))}
    </div>
  );
}

export default Sidebar;
