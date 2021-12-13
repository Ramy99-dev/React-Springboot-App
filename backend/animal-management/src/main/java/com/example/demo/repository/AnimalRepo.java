package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.Animal;
import com.example.demo.entities.Race;

@RepositoryRestResource(path = "rest")
public interface AnimalRepo extends JpaRepository<Animal, Long>{

	List<Animal> findByName(String name);
	List<Animal> findByNameContains(String name);
	
	/*@Query("select a from Animal a where a.name like %?1 and a.age > ?2")
	List<Animal> findByAnimalNameAndAge (String nom, Long age);*/
	
	@Query("select a from Animal a where a.name like %:nom and a.age > :age")
	List<Animal> findByAnimalNameAndAge (@Param("nom") String nom,@Param("age") Long age);
	
	
	@Query("select a from Animal a where a.race = ?1")
	List<Animal> findByRace (Race race);
	
	List<Animal> findByRaceId(Long id);
	
	List<Animal> findByOrderByNameAsc();
	
	
	@Query("select a from Animal a order by a.age ASC, a.age DESC")
	List<Animal> trierAniamlsAge();
	
	
	
}
