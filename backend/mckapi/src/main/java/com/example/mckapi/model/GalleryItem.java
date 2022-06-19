package com.example.mckapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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
    @Id
    public String id;

    public GalleryItem(String title, String image, String description, String categoryType){
        this.title = title;
        this.image = image;
        this.description = description;
        this.categoryType = categoryType;
        this.id = UUID.randomUUID().toString();
    }

    public String getId(){
        return id;
    }

    public void setId(String id){this.id = id;}

    public String getTitle(){
        return title;
    }

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public void setTitle(String title){
        this.title = title;
    }
    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }
    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format("GalleryItem[id='%s', title='%s', image='%s',description='%s']",id,title,image,description);
    }
}
