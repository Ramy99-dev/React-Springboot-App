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
import com.example.demo.entities.Race;
import com.example.demo.service.RaceService;

@RestController
@RequestMapping("/api/race")
@CrossOrigin
public class RaceRestController {
	
	@Autowired
	 RaceService raceService;
	
	
	@RequestMapping(method =RequestMethod.GET)
	List<Race> getAllRaces()
	{
		return raceService.getAllRace();
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Race getRaceById(@PathVariable("id") Long id) {
	return raceService.getRace(id);

	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Race createRace(@RequestBody Race race) {
	return raceService.saveRace(race);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Race updateRace(@RequestBody Race race) {
	return raceService.updateRace(race);
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteRace(@PathVariable("id") Long id)
	{
	  raceService.deleteRaceById(id);
	}
	
	@RequestMapping(value="/findByName/{name}", method = RequestMethod.GET)
	public List<Race> getByNameContains(@PathVariable("name") String race)
	{ 
		return raceService.getRaceByName(race);
	}
	
	
	

}

