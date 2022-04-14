import React,{useState,useEffect} from 'react'
import './headerMain.css'
import { Link } from 'react-router-dom'
import { PUBLIC_PATHS_NAV } from '../../routes/config'

export const HeaderMain = () => {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
     function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(
          getWindowDimensions()
        );

        useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowDimensions;
     }

     
    
      
   
     
     const {width} = useWindowDimensions()
      
        
        return (
        <div className='header-container background-header'>
            <div className='header-content'>
                {width>768 ? <p >Yo sumo para avanzar</p> :  <p >Yo + para avanzar</p>}
                <Link to={PUBLIC_PATHS_NAV[0].ROUTE} >
                  <button  className='header-button'>
                    <h4>Crea tu petición</h4>
                  </button>
                </Link>
            </div>
        </div>
    )
}
