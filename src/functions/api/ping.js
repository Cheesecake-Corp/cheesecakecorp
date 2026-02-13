export async function onRequestGet() {
  return new Response(
    JSON.strinfigy({status: "ok", time: Date.now()}),
    {headers: { "content-type": "application/json"}}
  );
}
