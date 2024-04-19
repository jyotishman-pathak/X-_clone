import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";

// Function to generate a random integer between min (inclusive) and max (inclusive)
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate random counts for each post
const post1CommentCount = getRandomInt(1, 100);
const post2CommentCount = getRandomInt(1, 100);
const post3CommentCount = getRandomInt(1, 100);

const data = [
  { icon: <FaRegComment size={'20px'} />, count: post1CommentCount },
  { icon: <CiHeart size={'24px'} />, count: getRandomInt(1, 50) },
  { icon: <CiBookmark size={'24px'} />, count: getRandomInt(0, 10) },
  { icon: <FaRegComment size={'20px'} />, count: post2CommentCount },
  { icon: <CiHeart size={'24px'} />, count: getRandomInt(1, 50) },
  { icon: <CiBookmark size={'24px'} />, count: getRandomInt(0, 10) },
  { icon: <FaRegComment size={'20px'} />, count: post3CommentCount },
  { icon: <CiHeart size={'24px'} />, count: getRandomInt(1, 50) },
  { icon: <CiBookmark size={'24px'} />, count: getRandomInt(0, 10) },
];

export default data;
