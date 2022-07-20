package com.example.mckapi.repository;
import com.example.mckapi.model.Contact;
import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.model.Homepage;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {
}
