import React, {useState} from 'react'
import styles from './Filters.module.scss'


const Filters = (props) => {
    const {setBeers, wholeList} = props

    const [isSelected,setSelected] = useState(false);
    const [abv, setAbv] = useState(false);
    const [acidic,setAcidic] = useState(false);
    const [ebc,setEbc] = useState(false);

   /*  const filterBoth = async () => {
        if (abv && acidic) {
            return await fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
            .then(response => response.json())
            .then(data => {
                let beersList = data.map(beer => beer);
                setBeers(beersList.filter(beer => beer.ph < 4))})
       } else if (abv) {
            return await fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
       } else if (acidic){
            return await fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(data => {
                let beersList = data.map(beer => beer);
                setBeers(beersList.filter(beer => beer.ph < 4))})
       } else {
            return await wholeList().then(beers =>setBeers(beers))
       }
    } */

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
            return fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(data => {
                let beersList = data.map(beer => beer);
                setBeers(beersList.filter(beer => beer.ph < 4))})
        } else {
            return wholeList().then(beers =>setBeers(beers))
        }  
    }

    const ebcFilter = () => {
        console.log("running function im",ebc)
        if (ebc === false){
            return fetch("https://api.punkapi.com/v2/beers?ebc_gt=20")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
        } else {
            return wholeList().then(beers =>setBeers(beers))
        } 
    }

    const toggleAbvFilter = () => {
        abv ? abvFilter(setAbv(false)) : abvFilter(setAbv(true));
    }

    const toggleAcidFilter = () => {
       acidic ? acidicFilter(setAcidic(false)) : acidicFilter(setAcidic(true));
    }
    
    const toggleEbcFilter = () => {
        ebc ? ebcFilter(setEbc(false)) : ebcFilter(setEbc(true));
     }

    /* const checkIfToggled = () => {
       if (abv && acidic){
            setAbv(!abv);
            setAcidic(!acidic);
            filterBoth()
        } else if (!abv && acidic){
            setAbv(!abv);
            setAcidic(acidic);
            filterBoth() 
        } else if (abv && !acidic){
            setAbv(abv);
            setAcidic(!acidic);
            filterBoth() 
        }
    } */


    return (
        <div className={styles.filterList}>
            <label>High ABV ({">"} 6.0%)
            <input type="checkbox" onChange={()=>toggleAbvFilter()}/></label>
            <label>EBC {">"} 20
            <input type="checkbox" onChange={()=>toggleEbcFilter()}/></label>
            <label>Acidic (pH {"<"} 4)
            <input type="checkbox" onChange={()=>toggleAcidFilter()}/></label>
        </div>
    )
}

export default Filters
