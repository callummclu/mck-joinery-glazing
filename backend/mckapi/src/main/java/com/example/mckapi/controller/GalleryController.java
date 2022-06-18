package com.example.mckapi.controller;

import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.model.GalleryResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpClient;
import java.util.Map;

@RestController
public class GalleryController {
    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/gallery",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public GalleryResponse Gallery(){

        GalleryItem[] items = {
                new GalleryItem("image Title","image url","image Description"),
                new GalleryItem("image2","image url","another description"),
                new GalleryItem("image3","image url","third description")
        };
        return new GalleryResponse("200",items);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/gallery/add",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public String AddGallery(@RequestBody String item) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Map<String,GalleryItem> newItem = mapper.readValue(item, Map.class);

        return item;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/gallery/{id}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public GalleryItem GetSingleItem(@PathVariable String id){
        return new GalleryItem(id,"src","Item Description {id}");
    }
}
