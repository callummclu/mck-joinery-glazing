export const convertToBase64 = async (file:File,callback:Function) => {
    let reader = new FileReader()
    reader.onloadend = function(){
        callback(reader.result)
    }
    reader.readAsDataURL(file)
}

export const convertFromBase64 = (imageData:string) => {
	var image = new Image();
	image.src = imageData;
	return image
}