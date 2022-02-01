import { ADD_PRODUCT, DELETE_REVIEW, IS_VUE } from "./Actions-Types";

const initialstate = {
  Products: [
    {
      Name: "flower pot",
      Price: "10",
      Image: "img-1.jpg",
      discount: "10",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "11.50",
      Image: "img-2.jpg",
      discount: "10",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "16",
      Image: "img-3.jpg",
      discount: "10",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "11.50",
      Image: "img-4.jpg",
      discount: "5",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "15.50",
      Image: "img-5.jpg",
      discount: "5",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "13.50",
      Image: "img-6.jpg",
      discount: "15",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "12",
      Image: "img-7.jpg",
      discount: "10",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "14",
      Image: "img-8.jpg",
      discount: "5",
      pricei: "",
    },
    {
      Name: "flowers pot",
      Price: "13.50",
      Image: "img-9.jpg",
      discount: "15",
      pricei: "",
    },
  ],
  Review: [
    {
      id: 1,
      proprot: "Khaoula",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. CorruptiLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ",
      profil: "pic-2.png",
      rating: 3,
      vue: false,
    },
    {
      id: 2,
      proprot: "Yasmine",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. CorruptiLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ",
      profil: "profile.jpg",
      rating: 5,
      vue: false,
    },
    {
      id: 3,
      proprot: "Rayen",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. CorruptiLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ",
      profil: "pic-1.png",
      rating: 4,
      vue: false,
    },
    {
      id: 4,
      proprot: "Mohamed",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. CorruptiLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ",
      profil: "pic-3.png",
      rating: 3,
      vue: false,
    },
  ],
};

export const productreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, Products: [...state.Products, payload] };
    case DELETE_REVIEW:
      return {
        ...state,
        Review: state.Review.filter((t) => t.id !== payload),
      };
    case IS_VUE:
      return {
        ...state,
        Review: state.Review.map((el) =>
          el.id == payload ? { ...el, vue: !el.vue } : el
        ),
      };
    default:
      return state;
  }
};
