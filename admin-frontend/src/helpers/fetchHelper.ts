export const GET = (url:string) => {
	return fetch(url).then(async res => {
					let res_json = res.json()
					return res_json
				})
}