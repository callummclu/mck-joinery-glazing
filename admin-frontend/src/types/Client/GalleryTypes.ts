export interface GalleryItem{
	id:string;
	name:string;
	image:string;
	description:string;
}

export interface GalleryResponse{
	status:string;
	items:GalleryItem[]
}