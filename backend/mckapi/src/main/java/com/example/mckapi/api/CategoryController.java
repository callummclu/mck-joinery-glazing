package com.example.mckapi.api;

import com.example.mckapi.model.Category;
import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.repository.CategoryRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/category",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/category/{id}",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public Category getOneCategory(@PathVariable String id){
        return categoryRepository.findById(id).orElse(null);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/category/add",method= RequestMethod.POST,produces= MediaType.APPLICATION_JSON_VALUE)
    public void addOneCategory(@RequestBody String type) throws JsonProcessingException {

        Category category = new Category(type);

        categoryRepository.save(category);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://admin.localhost:3000"})
    @RequestMapping(value="/category/{id}",method= RequestMethod.DELETE,produces= MediaType.APPLICATION_JSON_VALUE)
    public void deleteOneCategory(@PathVariable String id){
        categoryRepository.delete(categoryRepository.findById(id).orElse(null));
    }

}
