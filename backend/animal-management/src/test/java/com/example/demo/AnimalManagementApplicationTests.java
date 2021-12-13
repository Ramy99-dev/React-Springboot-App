package com.example.demo;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Race;
import com.example.demo.entities.Race;
import com.example.demo.repository.RaceRepo;
import com.example.demo.service.RaceService;

@SpringBootTest
class RaceManagementApplicationTests {

	
	/*@Autowired
	private RaceRepo RaceRepo ;
	@Autowired
	private RaceService RaceService;
	
	@Test
	void testRaceFindByName()
	{
		List<Race> Races = RaceRepo.findByName("chat");
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	@Test
	void testRaceFindByNameContains()
	{
		List<Race> Races = RaceRepo.findByNameContains("chat");
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	@Test
	void testRaceFindByNameAndAge()
	{
		List<Race> Races = RaceRepo.findByRaceNameAndAge("chat",8L);
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	
	@Test
	void findByRace()
	{
		Race r = new Race();
		r.setId(1L);
		List<Race> Races = RaceRepo.findByRace(r);
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	
	@Test
	void findByRaceId()
	{
		
		List<Race> Races = RaceRepo.findByRaceId(1L);
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	
	@Test
	void findByOrderByNameAsc()
	{
		
		List<Race> Races = RaceRepo.findByOrderByNameAsc();
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}
	
	@Test
	void trierRacesAge()
	{
		
		List<Race> Races = RaceRepo.trierAniamlsAge();
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}*/
	@Autowired
	private RaceService RaceService;
	
	@Test 
	void test()
	{
		List<Race> Races = RaceService.getAllAniamls();
		for (Race Race : Races) {
			System.out.println(Race);
		}
		
	}

}
