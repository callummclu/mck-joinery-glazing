package com.example.mckapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.UUID;

@Document
public class Category {

    @Field
    public String type;
    @Id
    public String id;

    public Category(String type){
        this.type = type;
        this.id = UUID.randomUUID().toString();;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){this.id = id;}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return String.format("Category[id='%s', type='%s'",id,type);
    }
}
