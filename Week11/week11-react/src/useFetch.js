import React, {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [ data, setData ] = useState( null );
    const[ isPending, setIsPending ] = useState( true);
    const[ error, setError ] = useState( null );
    useEffect( () => {
        // let url ="http://localhost:8000/books";
        const abortContrl = new AbortController()
        setTimeout( () => {
            fetch ( url )
                .then( resp => {
                    if ( !resp.ok ){
                        throw Error( "Cannot fetch URL for data resource");
                    }
                    return resp.json()
                }).then( data => {
                setIsPending( false)
                setData( data );
                setError( null );
            }).catch( ( err ) => {
                if(err.name === "AbortError"){
                    console.log(" Abort Error");
                }else{
                    console.log( "Error->");
                    console.log( err.message );
                    setError( err.message );
                }

            })
        }, 2000)
        return () => {
            console.log("Clean UP")
            abortContrl.abort();
        }
    }, [url]);

    return { data, isPending, error};
}

export default useFetch;