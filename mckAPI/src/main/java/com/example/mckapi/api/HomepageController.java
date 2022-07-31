package com.example.mckapi.api;

import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.model.Homepage;
import com.example.mckapi.repository.GalleryRepository;
import com.example.mckapi.repository.HomepageRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HomepageController {

    private final HomepageRepository homepageRepository;
    @Autowired
    public HomepageController(HomepageRepository homepageRepository){
        this.homepageRepository = homepageRepository;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/homepage",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Homepage> setHomepage(){
        return homepageRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/homepage/{id}",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public Homepage getChangeHomepage(@PathVariable String id,@RequestBody Homepage item) {
        Homepage _item = item;
        _item.setId(id);
        homepageRepository.save(_item);
        return _item;
    }

}
