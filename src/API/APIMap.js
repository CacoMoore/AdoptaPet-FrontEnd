import React, { useEffect, useState } from "react";

const Map = () => {
    const [maps, setmaps] = useState([])

    const getMaps = () => [
        fetch("")
        .then(res => res.json())
        .then(data => setmaps(data))
        .catch(err => console.log(err))
    ];
    useEffect(() => {
        getMaps();
        console.log(maps);
    }, [])

    return(  
        <></>
    )
};
export default Map;