async function onRequestPost(request) {
    try {
        const data = await request.json();
        // Process the data here
        return new Response('Data processed successfully', { status: 200 });
    } catch (error) {
        return new Response('Error processing data: ' + error.message, { status: 500 });
    }
}

async function onRequestGet(request) {
    try {
        const value = await MY_KV.get('key');
        if (!value) {
            return new Response('Value not found', { status: 404 });
        }
        return new Response(value, { status: 200 });
    } catch (error) {
        return new Response('Error retrieving value: ' + error.message, { status: 500 });
    }
}