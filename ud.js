async function post(data) {
    try {
        let url = "https://" + data.url;
        console.log(url);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": data.headers.token,
                "Content-Type": data.headers.ctype
            },
            body: data.body,
        });
        let body = await response.json();
        console.log(body);
        return body;
    }
    catch (err) {
        return { error: err.message };
    }
}

async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            },
        });
        const responseJson = await response.json();
        return {
            statusCode: response.status,
            reasonPhrase: response.statusText,
            jsonResponse: responseJson,
        };
    } catch (error) {
        console.log("Error" + error);
        return { err: error };
    }
}