
// 공유하기 버튼
var shareBtn = document.querySelector('#shareBtn');
shareBtn.addEventListener('click', kakaoShare);


// 카카오톡 공유하기
function kakaoShare() {
	var point = calculation; // 결과 유형 index;
	console.log("결과유형 ID: " + point);
	var imgURL = './img/image_' + point + '.jpg';
	
	
//	const shareTitle = '심리테스트 유형 결과'
//	const shareDes = document.querySelector('.resultName').textContent;
//	const shareImg = 'https://6186-221-148-218-116.ngrok-free.app/'+imgURL;
//	const shareURL = 'https://6186-221-148-218-116.ngrok-free.app/'+'resultPage.do?id='+point;
	
	Kakao.Share.sendDefault({
	  objectType: 'feed',
	  content: {
	    title: '심리테스트 유형 결과',
	    description: document.querySelector('.resultName').textContent,
	    imageUrl: 'http://152.69.224.218:8080/'+imgURL,
	    link: {
	      mobileWebUrl: 'http://152.69.224.218:8080/'+'resultPage.do?id='+point,
	      webUrl: 'http://152.69.224.218:8080/'+'resultPage.do?id='+point
	    },
	  },
	 
	  buttons: [
	    {
	      title: '결과확인하기',
	      link: {
	        mobileWebUrl: 'http://152.69.224.218:8080/'+'resultPage.do?id='+point,
	        webUrl: 'http://152.69.224.218:8080/'+'resultPage.do?id='+point
	      },
	    },
	  ],
	});
	
} // kakaoShare end