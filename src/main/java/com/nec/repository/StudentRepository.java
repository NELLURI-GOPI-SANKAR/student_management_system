package com.nec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nec.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
	
}