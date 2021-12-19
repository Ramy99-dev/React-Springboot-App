package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Animal;
import com.example.demo.entities.Race;

public interface AnimalService {
	
	Animal saveAnimal(Animal a);
	Animal updateAnimal(Animal a);
	void deleteAnimal(Animal a);
	void deleteAnimalById(Long id);
	Animal getAnimal(Long id);
	List<Animal> getAllAniamls();
	List<Animal> findByNameAnimal(String nom);
	List<Animal> findByNameAnimalContains(String nom);
	List<Animal> findByNameAge (String nom, Long age);
	List<Animal> findByRace (String race);
	List<Animal> findByRaceId(Long id);
	List<Animal> findByOrderByNomAnimalAsc();
	List<Animal> trierAnimalNomsAge();

}
