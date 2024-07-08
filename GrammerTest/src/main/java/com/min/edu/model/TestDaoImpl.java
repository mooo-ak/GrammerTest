package com.min.edu.model;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.min.edu.dto.TestDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class TestDaoImpl implements ITestDao {
	
	@Autowired
	private SqlSessionTemplate session;
	
	private final String NS = "com.min.edu.model.TestDaoImpl.";
	
	@Override
		public TestDto selectResult(String id) {
			log.info("TestDaoImpl selectResult DAO Access");
			return session.selectOne(NS+"selectResult", id);
		}

}
