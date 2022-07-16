

export const fetcher = (url:string,method?:string) => fetch(url,{
    method: method || "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      mode:"cors"
}).then(async (res) => {
  let res_json = await res.json()
  return res_json
})