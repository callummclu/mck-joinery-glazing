package com.example.mckapi.api;

import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.repository.GalleryRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GalleryController {

    private final GalleryRepository galleryRepository;
    @Autowired
    public GalleryController(GalleryRepository galleryRepository){
        this.galleryRepository = galleryRepository;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/gallery",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<GalleryItem> Gallery(){
        return galleryRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/gallery/all/{category}",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<GalleryItem> AddGallery(@PathVariable String category){
        return galleryRepository.findByCategory(category);
    }
    
    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/gallery/parent/{parent}",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<GalleryItem> Gallery(@PathVariable String parent){
        return galleryRepository.findByParent(parent);
    }



    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/gallery/{category}/add",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public void AddGallery(@RequestBody GalleryItem item) throws JsonProcessingException {
        galleryRepository.save(item);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/gallery/{category}/{id}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public GalleryItem GetSingleItem(@PathVariable String category, @PathVariable String id) {
        return galleryRepository.findByIdAndCategory(category,id);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/gallery/{category}/{id}",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public GalleryItem ChangeSingleItem(@PathVariable String category, @PathVariable String id,@RequestBody GalleryItem item) {

        GalleryItem _item = item;
        _item.setId(id);
        galleryRepository.save(_item);
        return _item;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/gallery/{category}/{id}",method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
    public void DeleteSingleItem(@PathVariable String id){
        galleryRepository.delete(galleryRepository.findById(id).orElse(null));
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/gallery/category/{category}",method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
    public void DeleteCategory(@PathVariable String category){
        galleryRepository.deleteAll(galleryRepository.findByCategory(category));
    }

}
