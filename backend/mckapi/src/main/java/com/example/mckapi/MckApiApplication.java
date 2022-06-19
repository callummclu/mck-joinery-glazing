package com.example.mckapi;

import com.example.mckapi.model.Category;
import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.repository.CategoryRepository;
import com.example.mckapi.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MckApiApplication implements CommandLineRunner {

    private final GalleryRepository galleryRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public MckApiApplication(GalleryRepository galleryRepository, CategoryRepository categoryRepository){
        this.galleryRepository = galleryRepository;
        this.categoryRepository = categoryRepository;
    }
    public static void main(String[] args) {SpringApplication.run(MckApiApplication.class, args);}

    @Override
    public void run(String... args){
        if(galleryRepository.findAll().isEmpty()){
            galleryRepository.save(new GalleryItem("image Title","image url","image description","Bay"));
        }
        if(categoryRepository.findAll().isEmpty()){
            categoryRepository.save(new Category("Bay"));
        }

    }
}
