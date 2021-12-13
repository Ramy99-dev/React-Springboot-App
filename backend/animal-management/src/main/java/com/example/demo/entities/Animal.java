package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Animal 
{
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id ; 
   private String name ; 
   private Long age;
   @ManyToOne
   private Race race ;
   
   
   
    
}
