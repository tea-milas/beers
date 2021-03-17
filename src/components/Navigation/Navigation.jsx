import React from 'react'
import styles from './Navigation.module.scss'
import Search from '../Search/Search.jsx'
import Filters from '../Filters/Filters.jsx'

const Navigation = (props) => {
    const {setSearchText, setBeers, searchBeers, wholeList} = props;
    return (
        <nav className={styles.nav}>
            <h1>Punk API</h1>
            <Search setSearchText={setSearchText} searchBeers={searchBeers}/>
            <Filters setBeers={setBeers} wholeList={wholeList}/>
        </nav>
    )
}

export default Navigation
