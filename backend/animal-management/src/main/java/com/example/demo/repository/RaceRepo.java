package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//import com.example.demo.entities.Animal;
import com.example.demo.entities.Race;
@RepositoryRestResource(path = "rest")
public interface RaceRepo  extends JpaRepository<Race, Long>{
	
	
	List<Race> findByRaceNameContains(String name);
}
