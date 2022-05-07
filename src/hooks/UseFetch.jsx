import axios from 'axios';
import { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((_) => {
                setLoading(false);
                setErr('something went wrong !');
            });
    }, [url]);

    return [data, loading, err];
};

export default UseFetch;
