export async function create(book) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function update(id, book) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/books/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function remove(id) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/books/' + id, {
            method: 'DELETE',
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}