package com.min.edu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.min.edu.dto.TestDto;
import com.min.edu.model.ITestDao;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TestServiceImpl implements ITestService {
	
	@Autowired
	private ITestDao tDao;

	@Override
	public TestDto selectResult(String id) {
		log.info("TestServiceImpl selectResult 테스트 최종 결과");
		return tDao.selectResult(id);
	}

}
