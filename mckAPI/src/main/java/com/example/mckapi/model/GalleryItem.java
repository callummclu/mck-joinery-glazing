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
    public String image;
    @Field
    public String description;
    @Field
    public String categoryType;
    @Field
    public String parent;
    @Id
    public String id;
    public GalleryItem(String title, String image, String description, String categoryType, String parent){
        this.title = title;
        this.image = image;
        this.description = description;
        this.categoryType = categoryType;
        this.id = UUID.randomUUID().toString();
        this.parent = parent;
    }
    public void setId(String id){this.id = id;}
    @Override
    public String toString() {
        return String.format("GalleryItem[id='%s', title='%s',image='%s',description='%s',categoryType='%s',parent='%s']",id,title,image,description,categoryType);
    }
}
