import React, { useState, useEffect } from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  const { setUrl } = props;

  const [abv, setAbv] = useState(false);
  const [acidic, setAcidic] = useState(false);
  const [ebc, setEbc] = useState(false);
  const [classic, setClassic] = useState(false);

  const filterBoth = () => {
    if (abv && acidic && ebc && classic) {
      setUrl(
        "https://api.punkapi.com/v2/beers?abv_gt=6&ibu_lt=4&ebc_gt=20&brewed_before=01-2010"
      );
    } else if (abv && acidic && classic) {
      setUrl(
        "https://api.punkapi.com/v2/beers?abv_gt=6&ibu_lt=4&brewed_before=01-2010"
      );
    } else if (abv && ebc && classic) {
      setUrl(
        "https://api.punkapi.com/v2/beers?abv_gt=6&ebc_gt=20&brewed_before=01-2010"
      );
    } else if (acidic && ebc && classic) {
      setUrl(
        "https://api.punkapi.com/v2/beers?ibu_lt=4&ebc_gt=20&brewed_before=01-2010"
      );
    } else if (abv && acidic && ebc) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6&ibu_lt=4&ebc_gt=20");
    } else if (abv && acidic) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6&ibu_lt=4");
    } else if (abv && ebc) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6&ebc_gt=20");
    } else if (abv && classic) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6&brewed_before=01-2010");
    } else if (acidic && ebc) {
      setUrl("https://api.punkapi.com/v2/beers?ibu_lt=4&ebc_gt=20");
    } else if (acidic && classic) {
      setUrl("https://api.punkapi.com/v2/beers?ibu_lt=4&brewed_before=01-2010");
    } else if (ebc && classic) {
      setUrl(
        "https://api.punkapi.com/v2/beers?ebc_gt=20&brewed_before=01-2010"
      );
    } else if (abv) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6");
    } else if (acidic) {
      setUrl("https://api.punkapi.com/v2/beers?ibu_lt=4");
    } else if (ebc) {
      setUrl("https://api.punkapi.com/v2/beers?ebc_gt=20");
    } else if (classic) {
      setUrl("https://api.punkapi.com/v2/beers?brewed_before=01-2010");
    } else {
      setUrl("https://api.punkapi.com/v2/beers?page=1&per_page=75");
    }
  };

  useEffect(() => {
    filterBoth();
  }, [abv, acidic, ebc, classic]);

  return (
    <div className={styles.filterList}>
      <label>
        High ABV ({">"} 6.0%)
        <input type="checkbox" onClick={() => setAbv(!abv)} />
      </label>
      <label>
        EBC {">"} 20
        <input type="checkbox" onClick={() => setEbc(!ebc)} />
      </label>
      <label>
        Acidic (pH {"<"} 4)
        <input type="checkbox" onClick={() => setAcidic(!acidic)} />
      </label>
      <label>
        Classic Range
        <input type="checkbox" onClick={() => setClassic(!classic)} />
      </label>
    </div>
  );
};

export default Filters;
