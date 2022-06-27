export const convertToBase64 = (file:File) => new Promise((resolve, reject) => {
    const reader:FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
});

export const convertFromBase64 = (imageData:string) => {
	var image = new Image();
	image.src = imageData;
	return image
}