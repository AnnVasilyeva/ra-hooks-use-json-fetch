import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetLoading () {
    const [{data, loading, error}] = useJsonFetch('https://ra-hooks.herokuapp.com/loading', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error ({error})</div>}
            <div>{data.status}</div>
        </div>
    )

}