import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // El codigo es ejecutado unicamente cuando se renderiza la primera vez el componente ( similar al mounted de vue )
    useEffect(() => { 
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [ category ]);

    return state;
}