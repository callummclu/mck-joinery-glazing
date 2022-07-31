package com.example.mckapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.util.UUID;

@Document
public class Form {
    @Field 
    public String name;
    @Field
    public String number;
    @Field
    public String email;
    @Field 
    public String message;
    @Id
    public String id;
    public Form(String number, String email, String name, String message){
        this.id = UUID.randomUUID().toString();
        this.email = email;
        this.number = number;
        this.name = name;
        this.message = message;
    }
    public void setId(String id){this.id = id;}
    @Override
    public String toString() {
        return String.format("Contact[id='%s',number='%s',email='%s',name='%s',message='%s']",id,number,email,name,message);
    }
}
