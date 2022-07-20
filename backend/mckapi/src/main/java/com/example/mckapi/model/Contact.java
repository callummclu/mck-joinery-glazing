package com.example.mckapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.util.UUID;

@Document
public class Contact {
    @Field
    public String number;
    @Field
    public String email;
    @Id
    public String id;
    public Contact(String number, String email){
        this.id = UUID.randomUUID().toString();
        this.email = email;
        this.number = number;
    }
    public void setId(String id){this.id = id;}
    @Override
    public String toString() {
        return String.format("Contact[id='%s',number='%s',email='%s']",id,number,email);
    }
}
