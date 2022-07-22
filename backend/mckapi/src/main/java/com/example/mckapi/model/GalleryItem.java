package com.example.mckapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.UUID;

@Document
public class GalleryItem {
    @Field
    public String title;
    @Field
    public List<String> image;
    @Field
    public String description;
    @Field
    public String categoryType;
    @Id
    public String id;
    public GalleryItem(String title, List<String> image, String description, String categoryType){
        this.title = title;
        this.image = image;
        this.description = description;
        this.categoryType = categoryType;
        this.id = UUID.randomUUID().toString();
    }
    public void setId(String id){this.id = id;}
    @Override
    public String toString() {
        return String.format("GalleryItem[id='%s', title='%s',image='%s',description='%s']",id,title,image.toString(),description);
    }
}
