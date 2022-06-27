package com.example.mckapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.UUID;

@Document
public class Category {
    @Field
    public String type;
    @Field
    public String commentary;
    @Field
    public String parent;
    @Id
    public String id;
    public Category(String type, String commentary,String parent){
        this.type = type;
        this.id = UUID.randomUUID().toString();
        this.commentary = commentary;
        this.parent = parent;
    }
    @Override
    public String toString() {
        return String.format("Category[id='%s', type='%s', commentary='%s'",id,type,commentary);
    }

    public void setId(String id) {
        this.id = id;
    }
}
