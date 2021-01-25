import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetData () {
    const [{data, loading, error}] = useJsonFetch('https://ra-hooks.herokuapp.com/data', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
           <div>{data.status}</div>
        </div>
    )

}