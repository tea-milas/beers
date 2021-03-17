import React, {useState} from 'react'
import styles from './Display.module.scss'


const Display = (props) => {
    const {beers} = props;
    
    const shortenDescription = (description) =>{
        return description.length < 250
        ? description
        : description.substring(0, 200) + "...";
    }

    return (
        <div className={styles.display}>
            {beers.map(beer => {
                      return <div className={styles.beerCard}>
                                <img src={beer.image_url} alt={beer.name} />
                                <section className={styles.textArea}>
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <p>{shortenDescription(beer.description)}</p>
                                </section>   
                            </div>
            })}
        </div>
    )
}


export default Display
