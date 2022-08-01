package com.example.mckapi.api;
import com.example.mckapi.model.Form;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import java.io.IOException;
import java.net.PasswordAuthentication;
import java.text.MessageFormat;
import java.util.Properties;

import javax.mail.AuthenticationFailedException;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
public class FormController {

    @Autowired
    public FormController(){
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:5050","https://mck-joinery-glazing.vercel.app/","https://mck-joinery-glazing-admin.vercel.app/","https://admin.mckjoineryglazing.co.uk","https://mckjoineryglazing.co.uk"})
    @RequestMapping(value="/form/send",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public String sendForm(@RequestBody Form item) throws IOException {
        Email from = new Email("mark@mckjoineryglazing.co.uk","MCK - "+item.name);
        String subject = "Message from "+ item.name;
        Email to = new Email("mckjoinery.glazing@gmail.com");
        String temp_msg = String.format("Here are the details of this message,<br/><br/><h4>name: %s</h4><h5>email: %s</h5><h5>phone: %s</h5><hr/><h5>Message</h5><p>%s</p><br/>", item.name,item.email,item.number,item.message);
        Content content = new Content("text/html", temp_msg);
        Mail mail = new Mail(from, subject, to, content);
    
        SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
        Request request = new Request();
        try {
          request.setMethod(Method.POST);
          request.setEndpoint("mail/send");
          request.setBody(mail.build());
          com.sendgrid.Response response = sg.api(request);
          System.out.println(response.getStatusCode());
          System.out.println(response.getBody());
          System.out.println(response.getHeaders());
        } catch (IOException ex) {
          throw ex;
        }
        return "message received";
    }

}
