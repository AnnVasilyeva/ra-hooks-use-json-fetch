import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetError () {
    const [{data, loading, error}] = useJsonFetch('https://ra-hooks.herokuapp.com/error', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error ({error})</div>}
            <div>{data.status}</div>
        </div>
    )

}