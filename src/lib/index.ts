// place files you want to import through the `$lib` alias in this folder.
export async function fetchPost<Type>({body, url}: {body: object, url: string}): Promise<Type> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await response.json()
}