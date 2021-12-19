package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Race;
import com.example.demo.repository.AnimalRepo;
import com.example.demo.repository.RaceRepo;
@Service
public class RaceServiceImpl implements RaceService {
	
	@Autowired
	RaceRepo raceRepo; 
	@Override
	public Race saveRace(Race a) {
		return raceRepo.save(a);
	}

	@Override
	public Race updateRace(Race a) {
		return raceRepo.save(a);
	}

	@Override
	public void deleteRace(Race a) {
		raceRepo.delete(a);
		
	}

	@Override
	public void deleteRaceById(Long id) {
		raceRepo.deleteById(id);
		
	}

	@Override
	public Race getRace(Long id) {
		return raceRepo.findById(id).get();
	}

	@Override
	public List<Race> getAllRace() {
		return raceRepo.findAll();
	}

	@Override
	public List<Race> getRaceByName(String name) {
		return raceRepo.findByRaceNameContains(name);
	}

}
