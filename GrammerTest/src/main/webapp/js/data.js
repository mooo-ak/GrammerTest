const qnaList = [
	/*{
		q : '하루 중 기분이 가장 좋은 시간대는?',
		a : [
			{ answer : '1. 아침', type: 2 },
			{ answer : '2. 오후나 이른 저녁', type: 4 },
			{ answer : '3. 늦은 밤', type: 6 }
		]
	},*/
	{
		q : '하루 중 기분이 가장 좋은 시간대는?',
		a : [
			{ answer : '1. 아침', value: 2 },
			{ answer : '2. 오후나 이른 저녁', value: 4 },
			{ answer : '3. 늦은 밤', value: 6 }
		]
	},
	{
		q : '나는 편히 앉을 때 보통',
		a : [
			{ answer : '1. 다리를 꼬고 앉는다', value: 6},
			{ answer : '2. 다리를 굽힌채 나란히 두고 앉는다', value: 4},
			{ answer : '3. 다리를 쭉 펴고 앉는다', value: 2},
			{ answer : '4. 한 쪽 다리를 접어 깔고 앉는다', value: 1}
		]
	},
	{
		q : '나는 걸을 때 ',
		a : [
			{ answer : '1. 머리를 들고 정면으로 바라보며 덜 빠르게', value: 7},
			{ answer : '2. 보폭을 넓고 빠르게', value: 6},
			{ answer : '3. 보폭을 좁고 빨리', value: 4},
			{ answer : '4. 바닥을 보며 덜 빠르게', value: 2},
			{ answer : '5. 아주 느리게', value: 1}
		]
	},
	{
		q : '사람들과 이야기 할 때 ',
		a : [
			{ answer : '1. 상대방을 터치하며 ', value: 7},
			{ answer : '2. 내 몸을 만지작 거리거나 머리를 만지며', value: 6},
			{ answer : '3. 한 손이나 양 손을 허리에 올리고', value: 5},
			{ answer : '4. 팔짱을 끼고', value: 4},
			{ answer : '5. 두 손을 마주 잡고', value: 2}
		]
	},
	{
		q : '재밌는 일이 생겼을 때',
		a : [
			{ answer : '1. 즐거움을 숨기지 않고 크게 웃는다', value: 6},
			{ answer : '2. 가벼운 미소를 짓는다', value: 5},
			{ answer : '3. 웃지만 크지 않게', value: 4},
			{ answer : '4. 소리를 내지 않고 웃는다', value: 3}
		]
	},
	{
		q : '가장 좋아하는 색깔은?',
		a : [
			{ answer : '1. 검정', value: 7},
			{ answer : '2. 빨강, 주황', value: 6},
			{ answer : '3. 노랑, 연파랑', value: 5},
			{ answer : '4. 녹색', value: 4},
			{ answer : '5. 진파랑, 보라', value: 3},
			{ answer : '6. 하양', value: 2},
			{ answer : '7. 갈색, 회색', value: 1}
		]
	},
	{
		q : '집중한 채 열심히 하다가 방해 받으면',
		a : [
			{ answer : '1. 휴식의 기회를 반갑게 맞이한다', value: 6},
			{ answer : '2. 짜증이 나지만 티를 내진 않는다', value: 4},
			{ answer : '3. 짜증이 나서 투덜거린다', value: 2}
		]
	},
	{
		q : '사람이 많이 모이는 장소에서',
		a : [
			{ answer : '1. 관종처럼 등장해 관종처럼 논다', value: 6},
			{ answer : '2. 차분히 들어가 사람 구경하기', value: 4},
			{ answer : '3. 시선 끌지 않도록 조용히 있는다', value: 2}
		]
	},
	{
		q : '잠들기 전 포즈 ',
		a : [
			{ answer : '1. 몸을 똑바로 펴고 눕는다 ', value: 7},
			{ answer : '2. 엎드린 채로 몸을 쭉 편다', value: 6},
			{ answer : '3. 옆으로 누워 웅크린 포즈', value: 4},
			{ answer : '4. 한 팔을 베고 있는 포즈', value: 2},
			{ answer : '5. 머리를 이불 밑에 넣은 포즈', value: 1}
		]
	},
	{
		q : '평소에 자주 꾸는 꿈',
		a : [
			{ answer : '1. 꿈을 잘 꾸지 않는다', value: 6},
			{ answer : '2. 날아오르거나 떠오르는 꿈', value: 5},
			{ answer : '3. 떨어지는 꿈', value: 4},
			{ answer : '4. 무언가를 찾는 꿈', value: 3},
			{ answer : '5. 싸우거나 애쓰는 꿈 ', value: 2},
			{ answer : '6. 기분 좋은 느낌의 꿈', value: 1}
		]
	}
]