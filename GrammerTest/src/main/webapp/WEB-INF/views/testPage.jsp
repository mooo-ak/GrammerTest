<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 배포 -->
<meta name="author" content="MooA">
<meta name="keyoword" content="심리테스트">
<meta name="description" content="심리테스트">
<!-- SNS share -->
<!-- <meta property="og:url" content="https://6186-221-148-218-116.ngrok-free.app/ToyProject_01/getTestPage.do"> -->
<!-- <meta property="og:title" content="심리테스트"> -->
<!-- <meta property="og:type" content="website"> -->
<!-- <meta property="og:img" content="./img/꼬부기.png"> -->
<!-- <meta property="og:description" content="심리테스트"> -->
<!-- favicon : -->
<link rel="shortcut icon" href="./img/favicon.ico">
<link rel="apple-touch-icon-precomposed" href="./img/favicon.ico">
<title>테스트</title>
<!-- 구글폰트 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dongle&display=swap">
<!-- 부트스트랩 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="./css/testPage.css">
<!-- 카카오톡 공유하기 -->
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
  integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4" crossorigin="anonymous"></script>

<script>
Kakao.init('a0a06ab068bebd74ada34c6f1a43e59b');
Kakao.isInitialized();
</script>
</head>
<body>

	<div class="container">
		<!--------------- 테스트 시작 --------------->
		<div class="main_container">
		<div id="main" class="mx-auto">
			<h1 class="main_title">마춤뻡 레벨 테스트</h1>
			<div class="col-12 col-lg-6 col-md-8 col-sm-10 mx-auto" >
				<img src="./img/main.jpg" alt="시작 이미지" class="img-fluid">
			</div>
			<p class="main_subtitle">
				당신의 맞춤법 실력은?! <br>
				아래 버튼을 눌러 시작해주세요!
			</p>
			<button type="button" class="btn btn-warning" id="startBtn">시작하기</button>
		</div>
		</div>
		<!--------------- 테스트 진행 --------------->
		<div id="qna" style="display: none;">
			<!-- 상태바 -->
			<div class="status">
				<div class="statusBar"></div>
			</div>
			<div class="statusNumber"></div>
			<!-- 질문과 대답 -->
			<div class="quest"></div>
			<div class="quest_img">
			<!-- <img src="#" alt="질문 이미지"> -->
			</div>
			<div class="answer"></div>
		</div>
		
		<!--------------- 테스트 결과 --------------->
		<div class="main_container">
		<div id="result" class="mx-auto" style="display: none;">
			<h2>당신의 결과는?</h2>
			<div class="resultName"></div>
			<div class="col-12 col-lg-6 col-md-8 col-sm-10 mx-auto" >
				<div id="imgDiv"></div>
			</div>
			<div class="resultContent"></div>
			<button type="button" class="btn btn-warning" id="shareBtn">공유하기</button>
		</div>
		</div>
	</div>
	
	
</body>
<script src="./js/kakaoShare.js" ></script>
<script src="./js/testPage.js" ></script>
<script src="./js/qna.js" ></script>
</html>