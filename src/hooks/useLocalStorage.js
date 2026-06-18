import { useState, useEffect } from "react";

function useLocalStorage(key = "data") {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem(key);

        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, [key]);

    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }, [key, data]);

    const addData = (newData) => {
        setData((prevData) => [...prevData, newData]);
    };

    return [data, addData];
}

export default useLocalStorage;