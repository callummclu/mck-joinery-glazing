package com.example.mckapi.repository;

import com.example.mckapi.model.Category;
import com.example.mckapi.model.GalleryItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

}
