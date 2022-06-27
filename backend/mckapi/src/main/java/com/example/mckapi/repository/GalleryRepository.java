package com.example.mckapi.repository;
import com.example.mckapi.model.GalleryItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface GalleryRepository extends MongoRepository<GalleryItem, String> {

    @Query(value="{ 'categoryType' : ?0}")
    List<GalleryItem> findByCategory(String category);

    @Query(value="{ 'categoryType' : ?0, '_id' :  ?1}")
    GalleryItem findByIdAndCategory(String category, String id);
}
