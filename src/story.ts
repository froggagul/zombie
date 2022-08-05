const stories = [
  {
    text: "2033년, 당신은 길고 긴 해커톤에 미쳐버려 좀비가 된 개발자들을 피해 헬기를 탄채 도망치게 됩니다. 목적지는 100km를 남겨두고, 헬기는 추락하게 됩니다.\n추락한다! 꽉잡아!\n당신은 좀비들을 피해 끝까지 살아남을 수 있을까요?",
    image: "images/story/1.png",
    select: [
      {
        text: "물론이죠!",
        results: [
          {
            item: "water",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
      {
        text: "아마요..?",
        results: [
          {
            item: "water",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
    ],
  },
  {
    text: "추락한 헬기의 잔해 속에서 기적적으로 살아난 당신, 운도 좋군요. 귀는 멍하고, 입 안은 까끌까끌합니다. 당신은 비틀대며 일어서서 눈을 비비고 앞의 건물을 응시하기 시작합니다. 당신앞에 가장 먼저 보이는 건물은...",
    image: "",
    select: [
      {
        text: "불타는 농가",
        results: [
          {
            item: "rurality",
            change: {
              type: "set",
              value: 1,
            },
          },
        ],
      },
      {
        text: "폐허가 된 빌딩",
        results: [
          {
            item: "rurality",
            change: {
              type: "set",
              value: 0,
            },
          },
        ],
      },
    ],
  },
  {
    text: "건물을 지나, 길을 가던 당신은 한 상자를 발견합니다. 이 상자에는 어떤 물건이 들어있을지 모릅니다. 열어보시겠습니까?",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "열어본다",
        results: [
          {
            item: "food",
            change: {
              type: "add",
              value: 10,
            },
          },
          {
            item: "water",
            change: {
              type: "add",
              value: 15,
            },
          },
        ],
      },
      {
        text: "그냥 지나간다",
        results: [
          {
            item: "household",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
    ],
  },
  {
    text: "알고보니 상자에는 물과 먹을 것이 들어있었습니다. 당신은 계속해서 발걸음을 옮겨갑니다. 배가 고파집니다.",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "다음",
        results: [
          {
            item: "food",
            change: {
              type: "sub",
              value: 5,
            },
          },
        ],
      },
    ],
  },
  {
    text: "당신은 지나가던 중 바위에 깔린 사람을 발견합니다. 사람을 구한다면 동료가 늘지만 나에게 상처가 생길수도 있습니다. 구하시겠습니까?",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "구하자",
        results: [
          {
            item: "household",
            change: {
              type: "add",
              value: 1,
            },
          },
          {
            item: "medication",
            change: {
              type: "sub",
              value: 2,
            },
          },
        ],
      },
      {
        text: "그냥 지나가자",
        results: [
          {
            item: "household",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
    ],
  },
  {
    text: "당신은 지나가던 중 한 여행자를 만납니다. 그는 거지 꼴인 당신을 보고 측은지심을 느꼈는지 도움을 주겠다면서 3가지 물건 중 하나를 고르라고 합니다. 위험한 인물 같지는 않아보입니다. 무엇을 고르시겠습니까?",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "여권",
        results: [
          {
            item: "documents",
            change: {
              type: "add",
              value: 1,
            },
          },
        ],
      },
      {
        text: "응급키트",
        results: [
          {
            item: "firstaid",
            change: {
              type: "add",
              value: 1,
            },
          },
        ],
      },
      {
        text: "옷가지",
        results: [
          {
            item: "clothing",
            change: {
              type: "add",
              value: 1,
            },
          },
        ],
      },
      {
        text: "그냥 지나간다.",
        results: [
          {
            item: "documents",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
    ],
  },
  {
    text: "당신은 지나가던 중 부러진 도끼를 발견합니다. 개발자인 당신은 손재주도 좋아 조금만 힘을 쓰면 도구를 만들 수 있을 것 같습니다. 하지만 조금 배가 고플수도 있겠네요. 어떻게 하시겠습니까?",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "만들지 않는다",
        results: [
          {
            item: "documents",
            change: {
              type: "add",
              value: 0,
            },
          },
        ],
      },
      {
        text: "만든다",
        results: [
          {
            item: "food",
            change: {
              type: "sub",
              value: 5,
            },
          },
          {
            item: "tools",
            change: {
              type: "add",
              value: 1,
            },
          },
        ],
      },
    ],
  },
];
export default stories;
