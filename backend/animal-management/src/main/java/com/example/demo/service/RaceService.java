package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Race;


public interface RaceService {

	Race saveRace(Race a);
	Race updateRace(Race a);
	void deleteRace(Race a);
	void deleteRaceById(Long id);
	Race getRace(Long id);
	List<Race> getAllRace();
	List<Race> getRaceByName(String name);
	/*List<Race> findByNameRace(String nom);
	List<Race> findByNameRaceContains(String nom);
	List<Race> findByNameAge (String nom, Long age);
	List<Race> findByRace (Race race);
	List<Race> findByRaceId(Long id);
	List<Race> findByOrderByNomRaceAsc();
	List<Race> trierRaceNomsAge();*/
}
