package com.example.mckapi.api;

import com.example.mckapi.model.Contact;
import com.example.mckapi.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactController {

    private final ContactRepository contactRepository;
    @Autowired
    public ContactController(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/contact",method= RequestMethod.GET,produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Contact> getContact(){
        return contactRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk","https://admin.mckjoineryglazing.co.uk"})
    @RequestMapping(value="/contact/{id}",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public Contact setChangeContact(@PathVariable String id,@RequestBody Contact item) {
        Contact _item = item;
        _item.setId(id);
        contactRepository.save(_item);
        return _item;
    }

}
