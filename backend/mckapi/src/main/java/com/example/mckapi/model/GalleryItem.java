package com.example.mckapi.model;

import java.util.UUID;

public class GalleryItem {

    public String title;
    public String image;
    public String description;

    public String id;
    public GalleryItem(String title, String image, String description){
        this.title = title;
        this.image = image;
        this.description = description;
        this.id = UUID.randomUUID().toString();;
    }
}
