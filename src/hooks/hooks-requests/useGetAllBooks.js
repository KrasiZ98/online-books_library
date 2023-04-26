import { useEffect, useState } from "react";

export default function useGetAllBooks(defaultValue) {
    const [books, setBooks] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/books')
            .then((response) => response.json())
            .then((result) => setBooks(Object.values(result)))
    }, []);

    return [books, setBooks];
}