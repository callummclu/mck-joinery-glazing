package com.example.mckapi.repository;

import com.example.mckapi.model.Category;
import com.example.mckapi.model.GalleryItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {
    @Query(value="{ 'type' : ?0}")
    List<Category> findByType(String category);
}
