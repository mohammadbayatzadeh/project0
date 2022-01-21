import React, { useContext } from "react";

//Components
import Company from "./Company";

//styles
import styles from "./Companies.module.css";

//contexts
import { apicontext } from "../server/ApiContextProvider";

const Companies = () => {
  const data = useContext(apicontext);
  return (
    <div className={styles.companies}>
      <div className={styles.container}>
        {data.map((name) => (
          <Company key={name.id} title={name.name} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
