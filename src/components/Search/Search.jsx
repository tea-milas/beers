import React from 'react'
import styles from './Search.module.scss'

const Search = (props) => {
    const {setSearchText, searchBeers} = props;

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search by name..." onChange={(e) => {searchBeers(e.target.value);setSearchText(e.target.value)}}/>
        </div>
    )
}

export default Search
