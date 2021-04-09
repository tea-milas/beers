import React,{useState, useEffect} from 'react'
import Mobile from './Mobile/Mobile.jsx'
import Desktop from './Desktop/Desktop'


const Navigation = (props) => {
    const {setSearchText, setBeers, searchBeers, wholeList} = props;

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 760);

    return (
        <>
            {isMobile ? <Mobile setSearchText={setSearchText} searchBeers={searchBeers} setBeers={setBeers} wholeList={wholeList} /> : 
                           <Desktop setSearchText={setSearchText} searchBeers={searchBeers} setBeers={setBeers} wholeList={wholeList}/>}
        </>
    )
}

export default Navigation
