package com.example.mckapi.model;

public class GalleryResponse {
    public String status;
    public GalleryItem[] items;
    public GalleryResponse(String status, GalleryItem[] items){
        this.status = status;
        this.items = items;
    }
}
