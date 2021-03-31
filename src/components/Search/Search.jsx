import React from 'react'
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    const {setSearchText, searchBeers} = props;

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search by name..." onChange={(e) => {searchBeers(e.target.value);setSearchText(e.target.value)}}/>
            <FontAwesomeIcon icon={faSearch} className={styles.fa}/>
        </div>
    )
}

export default Search
