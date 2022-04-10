import React,{useState,useEffect} from 'react'
import './headerMain.css'
import { Link } from 'react-router-dom'

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
               
                <button as={Link} path='/crear-peticion' className='header-button'><h4>Crea tu petición</h4>
                </button>
            </div>
        </div>
    )
}
