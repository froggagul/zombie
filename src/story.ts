const stories = [
  {
    text: "",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "시골",
        results: [
          {
            item: "water",
            change: {
              type: "add",
              value: 10,
            },
          },
        ],
      },
    ],
  },
  {
    text: "overwritetestoverwritetestoverwritetestoverwritetestoverwritetestoverwritetestoverwritetestoverwritetestoverwritetestoverwritetesto",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "연다",
        results: [
          {
            item: "water",
            change: {
              type: "add",
              value: 10,
            },
          },
        ],
      },
      {
        text: "안연다",
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
    text: "사람을 받을까?",
    image: "https://picsum.photos/200/300",
    select: [
      {
        text: "받는다",
        results: [
          {
            item: "household",
            change: {
              type: "add",
              value: 1,
            },
          },
          {
            item: "food",
            change: {
              type: "sub",
              value: 10,
            },
          },
        ],
      },
      {
        text: "안받는다",
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
];
export default stories;
