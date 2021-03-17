import React, {useState} from 'react'
import styles from './Filters.module.scss'


const Filters = (props) => {
    const {setBeers, wholeList} = props

    const [isSelected,setSelected] = useState(false);
    const [abv, setAbv] = useState(false);
    const [acidic,setAcidic] = useState(false);

    const abvFilter = () => {
        console.log("running function im",abv)
        if (abv === false){
            return fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
        } else {
            console.log("I'll return OG list")
            return wholeList().then(beers =>setBeers(beers))

        }
        
    }

    const acidicFilter = () => {
        if (acidic === false) {
            return fetch("https://api.punkapi.com/v2/beers?ph_lt=4")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
        } else {
            return wholeList().then(beers =>setBeers(beers))
        }
        
    }

    const toggleAbvFilter = () => {
        console.log("START",abv)
        abv === true ? abvFilter(setAbv(false)) : abvFilter(setAbv(true));
    }

    const toggleAcidFilter = () => {
       acidic ? acidicFilter(setAcidic(false)) : acidicFilter(setAcidic(true));
    }
    



    return (
        <div className={styles.filterList}>
            {console.log(abv)}
            <label>High ABV ({">"} 6.0%)
            <input type="checkbox" onChange={()=>toggleAbvFilter()}/></label>
            <label>Classic Range
            <input type="checkbox"/></label>
            <label>Acidic (pH {"<"} 4)
            <input type="checkbox" onChange={()=>toggleAcidFilter()}/></label>
        </div>
    )
}

export default Filters
