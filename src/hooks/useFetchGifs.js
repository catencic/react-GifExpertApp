
import  { useEffect, useState } from 'react'
import { getGrid } from '../helpers/getGifs';

        export const useFetchGifs = (category) => {
        const [state, setState] = useState({
            data: [],
            loading: true,
        });

            useEffect(() =>{
                getGrid(category)
                .then( img => {

        
            setState({
                data: img,
                loading: false,
            });
        

                
                })
            },[category]) 

            return state;
        }
