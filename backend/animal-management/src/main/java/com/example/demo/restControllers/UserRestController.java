package com.example.demo.restControllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "api")
public class UserRestController {
	@Autowired
	UserRepository userRep;

	@RequestMapping(path = "all",method = RequestMethod.GET)

	public List<User> getAllUsers() {
		return userRep.findAll();
	}
}