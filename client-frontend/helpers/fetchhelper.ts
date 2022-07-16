export const fetcher = (url:string) => fetch(url,{
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      mode:"cors"
}).then(res => res.json())