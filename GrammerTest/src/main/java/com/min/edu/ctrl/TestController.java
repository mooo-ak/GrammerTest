package com.min.edu.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.min.edu.dto.TestDto;
import com.min.edu.service.ITestService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class TestController {

	@Autowired
	private ITestService tService;
	
	@GetMapping (value = "/getTestResult.do")
	@ResponseBody
	public TestDto testResult (Model model, @RequestParam("id") String id) {
		log.info("TestController getTestResult.do : 테스트 최종결과 {}번", id);
		TestDto result = tService.selectResult(id);
		model.addAttribute("result",result);
		log.info("@ResponseBody 테스트 페이지로 결과 데이터 전송 : {}", result);
		return result;
	}
	
	// 결과 공유 테스트 컨트롤러
	@GetMapping (value = "/resultPage.do")
	public String testPage(Model model, String id) {
		log.info("테스트 페이지 이동: {}유형 페이지", id);
		// 테스트용 데이터
		TestDto testResult = tService.selectResult(id);
		model.addAttribute("testResult", testResult);
		return "resultPage";
	}

}
