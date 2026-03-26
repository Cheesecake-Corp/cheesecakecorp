export async function onRequestPost(context: any) {
  try {
    const body = await context.request.json()
    const value = body.value || ""

    console.log("Saving value:", value)
    await context.env.MY_KV.put("savedString", value)
    console.log("Value saved successfully")

    return new Response(JSON.stringify({ success: true }))
  } catch (error) {
    console.error("Error saving:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 })
  }
}

export async function onRequestGet(context: any) {
  try {
    const value = await context.env.MY_KV.get("savedString")
    console.log("Retrieved value:", value)
    return new Response(JSON.stringify({ value }))
  } catch (error) {
    console.error("Error retrieving:", error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}