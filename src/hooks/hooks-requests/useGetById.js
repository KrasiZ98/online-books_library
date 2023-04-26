import { useEffect, useState } from "react";

export default function useGetById(id, defaultValue) {
    const [book, setBook] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/books/' + id)
            .then((response) => response.json())
            .then((result) => setBook(result))
    }, [id]);

    return [book, setBook];
}