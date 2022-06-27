import React from "react";
import Filters from "../../Filters/Filters";
import Search from "../../Search/Search";
import styles from "../Navigation.module.scss";

const Desktop = (props) => {
  const { setSearchText, searchBeers, setUrl } = props;
  return (
    <div className={styles.nav}>
      <h1>Punk API</h1>
      <Search setSearchText={setSearchText} searchBeers={searchBeers} />
      <Filters setUrl={setUrl} />
    </div>
  );
};

export default Desktop;
