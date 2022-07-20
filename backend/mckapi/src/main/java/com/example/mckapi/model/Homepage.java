package com.example.mckapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.UUID;

@Document
public class Homepage {
    @Field
    public String splashText;
    @Field
    public String aboutUsText;
    @Field
    public String contactUsText;
    @Field
    public List<String> cardTitles;
    @Field
    public List<String> cardTexts;
    @Field
    public List<String> showcaseImages;
    @Id
    public String id;
    public Homepage(String splashText, String aboutUsText, String contactUsText, List<String> cardTitles, List<String> cardTexts, List<String> showcaseImages){
        this.id = UUID.randomUUID().toString();
        this.aboutUsText = aboutUsText;
        this.cardTexts = cardTexts;
        this.cardTitles = cardTitles;
        this.contactUsText = contactUsText;
        this.splashText = splashText;
        this.showcaseImages = showcaseImages;
    }
    public void setId(String id){this.id = id;}
    @Override
    public String toString() {
        return String.format("Homepage[id='%s',splashText='%s',aboutUsText='%s',contactUsText='%s',cardTitles='%s',cardTexts='%s',showcaseImages='%s']",id,splashText,aboutUsText,contactUsText,cardTitles,cardTexts,showcaseImages);
    }
}
