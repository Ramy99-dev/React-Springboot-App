package com.example.demo.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Animal;
import com.example.demo.service.AnimalService;

@RestController
@RequestMapping("/api/animal")
@CrossOrigin
public class AnimalRestController {
	@Autowired
	 AnimalService animalService;
	
	
	@RequestMapping(method =RequestMethod.GET)
	List<Animal> getAllAnimals()
	{
		return animalService.getAllAniamls();
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Animal getAnimalById(@PathVariable("id") Long id) {
	return animalService.getAnimal(id);

	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Animal createProduit(@RequestBody Animal animal) {
	return animalService.saveAnimal(animal);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Animal updateAnimal(@RequestBody Animal animal) {
	return animalService.updateAnimal(animal);
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteAnimal(@PathVariable("id") Long id)
	{
	  animalService.deleteAnimalById(id);
	}
	
	
	
	@RequestMapping(value="/findByRace/{r}", method = RequestMethod.GET)
	public List<Animal> getByRace(@PathVariable("r") String r)
	{ 
		return animalService.findByRace(r);
	}
	
	
	@RequestMapping(value="/findByName/{name}", method = RequestMethod.GET)
	public List<Animal> getByNameContains(@PathVariable("name") String animal)
	{ 
		return animalService.findByNameAnimalContains(animal);
	}
	

}
