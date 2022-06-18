package com.example.mckapi.controller;

import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.model.GalleryResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GalleryController {
    @RequestMapping(value="/gallery",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public GalleryResponse Gallery(){
        GalleryItem[] items = {new GalleryItem("image Title","image url","image Description")};
        return new GalleryResponse("200",items);
    }
}
