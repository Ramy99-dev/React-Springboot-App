package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Animal;
import com.example.demo.entities.Race;
import com.example.demo.repository.AnimalRepo;
@Service
public class AnimalServiceImpl implements AnimalService  {

	
	@Autowired
	AnimalRepo animalRepo; 
	
	@Override
	public Animal saveAnimal(Animal a) {
		return animalRepo.save(a);
	}

	@Override
	public Animal updateAnimal(Animal a) {
		return animalRepo.save(a);
	}

	@Override
	public void deleteAnimal(Animal a) {
		animalRepo.delete(a);
		
	}

	@Override
	public void deleteAnimalById(Long id) {
		animalRepo.deleteById(id);
		
	}

	@Override
	public Animal getAnimal(Long id) {
		return animalRepo.findById(id).get();
	}

	@Override
	public List<Animal> getAllAniamls() {
		return animalRepo.findAll();
	}

	@Override
	public List<Animal> findByNameAnimal(String nom) {
		return animalRepo.findByName(nom);
	}

	@Override
	public List<Animal> findByNameAnimalContains(String nom) {
		return animalRepo.findByNameContains(nom);
	}

	@Override
	public List<Animal> findByNameAge(String nom, Long age) {
		return animalRepo.findByAnimalNameAndAge(nom, age);
	}

	@Override
	public List<Animal> findByRace(Race race) {
		return animalRepo.findByRace(race);
	}

	@Override
	public List<Animal> findByRaceId(Long id) {
		return animalRepo.findByRaceId(id);
	}

	@Override
	public List<Animal> findByOrderByNomAnimalAsc() {
		return animalRepo.findByOrderByNameAsc();
	}

	@Override
	public List<Animal> trierAnimalNomsAge() {
		return animalRepo.trierAniamlsAge();
	}

}
