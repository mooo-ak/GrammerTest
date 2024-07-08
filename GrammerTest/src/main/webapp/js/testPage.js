
// 전역변수 선언 ----------------------------------------------------------
const main = document.querySelector('#main'); 
const qna = document.querySelector('#qna'); 
const result = document.querySelector('#result'); 
const startBtn = document.querySelector('#startBtn'); 
const endPoint = 10; // 질문 개수
const select = []; // 선택한 답변 점수 합산 배열
var index = 0;

// 시작하기 버튼 ----------------------------------------------------------
startBtn.addEventListener('click', start);
function start() {
	console.log('테스트 시작');
	main.style.WebkitAnimation = 'fadeOut 1s';
	main.style.animation = 'fadeOut 1s';
	setTimeout(() => {
		qna.style.WebkitAnimation = 'fadeIn 1s';
		qna.style.animation = 'fadeIn 1s';
		// main -> qna 화면 전환
		setTimeout(() => {
		main.style.display = 'none';
		qna.style.display = 'block';
	}, 400);
	// 화면이 바뀌면 Q&A 첫번째 질문 호출
	let qIdx = 0;
	goNext(qIdx);
	}, 400);
}
	
// Q&A 질문 ------------------------------------------------------------
function goNext(qIdx){
	
	// 1) 심리테스트 질문
	var quest = document.querySelector('.quest');
	quest.innerHTML = qnaList[qIdx].q;
	// 2) 심리테스트 답변
	for(let i in qnaList[qIdx].a) {
	// addAnswer(질문별 답변항목, 질문번호, 선택한 답변)
		addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
	}
	// 3) 심리테스트 진척도
	var statusBar = document.querySelector('.statusBar');
	statusBar.style.width = (100/endPoint) * (qIdx+1) + '%';
	
	// 4) 심리테스트 넘버링
	var statusNumber = document.querySelector('.statusNumber');
	statusNumber.innerHTML = (qIdx+1) + '/' + endPoint;
		
	/*
	if(qIdx+1 === endPoint) { // '==': 타입이 달라도 비교 가능, '===': 타입이 다르면 비교 불가능
		getResult();	
	}*/
		
	}
	

// Q&A 답변 버튼 -------------------------------------------------------
function addAnswer(answerText, qIdx, idx) {
	var a = document.querySelector('.answer');
	var answer = document.createElement('button');
	answer.classList.add('answerList');
	answer.classList.add('fadeIn');
	// <div class="answer"> 하위에 <button class="answerList"> 태그 생성
	a.appendChild(answer);
	answer.innerHTML = answerText;
	
	//	답변 버튼	클릭시 이벤트
	answer.addEventListener('click', function() {
	var children = document.querySelectorAll('.answerList');
	// 1) 버튼 전체 비활성화
	for (let i = 0; i < children.length; i++) {
        children[i].disabled = true; 
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
        }
    // 2) 버튼 전체 숨기기	
    	select[qIdx] = idx; // 문항별 answer index 배열에 기록
        setTimeout(() => {
        for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none'; 				
		}
	// 3) 다음 질문페이지로 이동	
		if(qIdx+1 < endPoint){
        goNext(++qIdx);         
		} else if (qIdx+1 === endPoint){
	// 4) 테스트 끝난 후 결과페이지로 이동
		getResult();
		}
		}, 450);
	});
}

// 결과페이지 호출 --------------------------------------------------------
function getResult() {
	// 1) 최종 결과 합산
	console.log('문항별 답변 기록 : ' + select);			
	calculation();
	console.log('id: ' + index);			
	// location.href = "./getTestResult.do?="+index
	qna.style.WebkitAnimation = 'fadeOut 1s';
	qna.style.animation = 'fadeOut 1s';

	// 2) 결과 데이터 가져오기
	$.ajax({
		url: './getTestResult.do',
		type: 'GET',
		data: { id: index },
		success: function(data) {
			// 2-1) 서버로부터 응답을 받은 후
			console.log('Response:', data);
			// 2-2) 애니메이션 효과 
			result.style.WebkitAnimation = 'fadeIn 1s';
			result.style.animation = 'fadeIn 1s';
			qna.style.display = 'none';
			result.style.display = 'block';
			// 2-3) 서버로부터 받은 데이터(data)를 사용하여 화면 업데이트 등을 수행
			var resultName = document.querySelector('.resultName');
			var resultContent = document.querySelector('.resultContent');
			resultName.textContent = "결과 이름: " + data.name;
			resultContent.textContent = "결과 설명: " + data.content;
			// 2-4) 결과에 따른 이미지 삽입
			var imgDiv = document.querySelector('#imgDiv');
			var resultImg = document.createElement('img');
			resultImg.src = './img/' + index + '.png';
			resultImg.classList.add('img-fluid');
			resultImg.alt = index; // alt : index를 통한 result페이지 공유 
			imgDiv.appendChild(resultImg);
			console.log('결과 이미지 Element: ' + resultImg);
		},
		error: function(error) {
			console.log('Error:', error);
		}
	});
	
}


// 테스트 결과 합산 --------------------------------------------------------
function calculation() {
	// 1) 최종점수 합산할 변수 선언
	var totalPoint = 0;
	// 2) 문항별 점수 합산
	for(let i = 0; i < endPoint; i++) {
		var qnaPoint = qnaList[i].a[select[i]];
		console.log(i+'번 문항별 해당 점수: ' + qnaPoint.value);
		totalPoint += qnaPoint.value;
		}
		console.log('최종 합산 점수: ' + totalPoint);

	// 3) 합산한 점수별 유형 분류
	if(totalPoint <= 2) {
		index = 1;
	} else if(totalPoint >2 && totalPoint <=5) {
		index = 2;
	} else if(totalPoint >5 && totalPoint <=7) {
		index = 3;
	} else if(totalPoint >7 && totalPoint <=9) {
		index =4;
	} else {
		index = 5;
	}
		
	console.log('최종결과: ' + index );

	return index;
	
}
