import { useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion, Variants } from "framer-motion";

import Button from "../../../Button";

import ArrowDown from "../../../../assets/icons/arrow-down.svg";

import styles from "./Section.module.scss";

const arrowVariants: Variants = {
  open: { rotate: 0, y: 4 },
  closed: { rotate: 180, y: -4 },
};

const sidebarVariants: Variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const sidebarTransition = { ease: "linear" };

interface Section {
  section: {
    id: string;
    label: string;
    subSections?: { id: string; label: string }[];
  };
  currentSection: string;
  selectSection: (id: string) => void;
}

function Section({ section, selectSection, currentSection }: Section) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  if (!!section.subSections) {
    const isSectionActive = currentSection?.startsWith(section.id);
    return (
      <div className={styles.SectionWithSub}>
        <Button
          type="button"
          className={classNames(styles.SectionHeader, {
            [styles.isActive]: isSectionActive,
          })}
          noStyle
          onClick={() => {
            selectSection(`${section.id}.`);
            setIsSubmenuOpen((prev) => !prev);
          }}
        >
          <span className={styles.Label}>{section.label}</span>
          <motion.div
            initial="closed"
            className={styles.ArrowContainer}
            animate={isSubmenuOpen ? "closed" : "open"}
            variants={arrowVariants}
          >
            <ArrowDown
              className={classNames(styles.ArrowIcon, {
                [styles.isActive]: isSectionActive,
              })}
            />
          </motion.div>
        </Button>
        <AnimatePresence initial={false}>
          {isSubmenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              transition={sidebarTransition}
              variants={sidebarVariants}
              className={styles.SubSections}
            >
              {section.subSections.map((section) => (
                <Section
                  key={section.id}
                  section={section}
                  currentSection={currentSection}
                  selectSection={selectSection}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Button
      type="button"
      noStyle
      className={classNames(styles.Section, {
        [styles.isActive]: currentSection === section.id,
      })}
      onClick={() => selectSection(section.id)}
    >
      {section.label}
    </Button>
  );
}

export default Section;
