package com.example.mckapi;
import com.example.mckapi.model.Category;
import com.example.mckapi.model.Contact;
import com.example.mckapi.model.GalleryItem;
import com.example.mckapi.model.Homepage;
import com.example.mckapi.repository.CategoryRepository;
import com.example.mckapi.repository.ContactRepository;
import com.example.mckapi.repository.GalleryRepository;
import com.example.mckapi.repository.HomepageRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class MckApiApplication implements CommandLineRunner {
    private final GalleryRepository galleryRepository;
    private final CategoryRepository categoryRepository;
    private final HomepageRepository homepageRepository;
    private final ContactRepository contactRepository;
    @Autowired
    public MckApiApplication(
            GalleryRepository galleryRepository,
            CategoryRepository categoryRepository,
            HomepageRepository homepageRepository,
            ContactRepository contactRepository
    ){
        this.galleryRepository = galleryRepository;
        this.categoryRepository = categoryRepository;
        this.homepageRepository = homepageRepository;
        this.contactRepository = contactRepository;
    }
    public static void main(String[] args) {SpringApplication.run(MckApiApplication.class, args);}

    @Override
    public void run(String... args){
        if(galleryRepository.findAll().isEmpty()){
            List<String> imageArr = Collections.<String> emptyList();
            galleryRepository.save(new GalleryItem("image Title",imageArr,"image description","Bay"));
        }
        if(categoryRepository.findAll().isEmpty()){
            categoryRepository.save(new Category("Bay","hello","glazing"));
        }
        if(homepageRepository.findAll().isEmpty()){
            homepageRepository.save(new Homepage(
                "Quality Work that speaks for itself", 
                "daw diwbaudwa dwanjdwavyudjwabnkljbh wayuv dwadw ayvuwadni dwao", 
                "bdwauib wdiwadwubai awwndj kabdy wvajhds jbuwaiv dhjasbu dia", 
                Arrays.asList("Card 1", "Card 2", "Card 3"), 
                Arrays.asList("dwadwadacd wavdwad adaw cdwcwdacdaw aw dcaw cdawdwa cdwac ","dawcdwacdcwa cdwcda dwad cwa wadc wadc wa","dcwadwa awd cdwawcdwacdwaawdcawdwdaswacsada"), 
                Arrays.asList("1","2","3")));
        }
        if(contactRepository.findAll().isEmpty()){
            contactRepository.save(new Contact("07857 073653", "mckjoinery.glazing@gmail.com"));
        }
    }
}
