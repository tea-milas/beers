import React, {useState, useEffect} from 'react'
import styles from './Filters.module.scss'


const Filters = (props) => {
    const {setBeers, wholeList} = props;

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
    
    useEffect(() => {
        abvFilter();
    }, [abv]);

    useEffect(() => {
        acidicFilter();
    }, [acidic]);

    useEffect(() => {
        ebcFilter();
    }, [ebc]);

    
    const abvFilter = () => {
        console.log("running function im",abv)
        if (abv){
            return fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
        } else {
            console.log("I'll return OG list")
            return wholeList().then(beers =>setBeers(beers))
        } 
    }

    const acidicFilter = () => {
        if (acidic) {
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
        if (ebc){
            return fetch("https://api.punkapi.com/v2/beers?ebc_gt=20")
            .then(response => response.json())
            .then(data => setBeers(data.map(beer => beer)))
        } else {
            return wholeList().then(beers =>setBeers(beers))
        } 
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
            <input type="checkbox" onClick={()=>setAbv(!abv)}/></label>
            <label>EBC {">"} 20
            <input type="checkbox" onClick={()=>setEbc(!ebc)}/></label>
            <label>Acidic (pH {"<"} 4)
            <input type="checkbox" onClick={()=>setAcidic(!acidic)}/></label>
        </div>
    )
}

export default Filters
