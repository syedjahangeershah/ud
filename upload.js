async function post(data) {
    console.log('reached workers');
    console.log(data);
    console.log(data.url);
    let url = "https://" + data.url;
    console.log(url);
    let blobFile = new Blob([data.body.buffer], { type: "application/octet-stream" });

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": data.headers.token,
            "Content-Type": data.headers.ctype
        },
        body: data.body,
    });
    console.log('reached here at end');
    console.log(response);
    let body = await response.json();
    console.log(body);
    return body;
}