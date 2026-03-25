export async function onRequestPost(context) {
  const body = await context.request.json()
  const value = body.value || ""

  await context.env.MY_KV.put("savedString", value)

  return new Response(JSON.stringify({ success: true }))
}

export async function onRequestGet(context) {
  const value = await context.env.MY_KV.get("savedString")
  return new Response(JSON.stringify({ value }))
}
