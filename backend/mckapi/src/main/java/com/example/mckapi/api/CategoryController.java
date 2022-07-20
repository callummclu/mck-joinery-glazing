package com.example.mckapi.api;
import com.example.mckapi.model.Category;

import com.example.mckapi.repository.CategoryRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category/{id}",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public Category getOneCategory(@PathVariable String id){
        return categoryRepository.findById(id).orElse(null);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category/type/{type}",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Category> getCategoryByName(@PathVariable String type){return categoryRepository.findByType(type);}

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category/add",method= RequestMethod.POST,produces= MediaType.APPLICATION_JSON_VALUE)
    public void addOneCategory(@RequestBody Category item){

        Category category = new Category(item.type, item.commentary, item.parent);

        categoryRepository.save(category);
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category/edit/{id}",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public Category ChangeOneCategory(@PathVariable String id, @RequestBody Category item) {
        Category _item = item;
        _item.setId(id);
        categoryRepository.save(_item);
        return _item;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/"})
    @RequestMapping(value="/category/{id}",method= RequestMethod.DELETE,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Category> deleteOneCategory(@PathVariable String id){
        categoryRepository.delete(categoryRepository.findById(id).orElse(null));
        return categoryRepository.findAll();
    }

}
