import React,{useState} from 'react'
import Mobile from './Mobile/Mobile.jsx'
import Desktop from './Desktop/Desktop'


const Navigation = (props) => {
    const {setSearchText, setBeers, searchBeers, wholeList} = props;

    const detectMob = () => {
        return ( ( window.innerWidth <= 1025 ) && ( window.innerHeight <= 1025 ) );
      }
    
    return (
        <>
            {detectMob() ? <Mobile setSearchText={setSearchText} searchBeers={searchBeers} setBeers={setBeers} wholeList={wholeList} /> : 
                           <Desktop setSearchText={setSearchText} searchBeers={searchBeers} setBeers={setBeers} wholeList={wholeList}/>}
        </>
    )
}

export default Navigation
