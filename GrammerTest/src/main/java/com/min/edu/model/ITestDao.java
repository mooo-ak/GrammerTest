package com.min.edu.model;

import com.min.edu.dto.TestDto;

public interface ITestDao {

	public TestDto selectResult(String id);
}
