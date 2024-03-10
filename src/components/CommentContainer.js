import React from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const commentsData = [
  {
    name: "@Ramya Iyengar",
    text: "Debouncing in React involves delaying the execution of a function until after a certain amount of time has passed since the last time the function was invoked. This is useful when dealing with events like user input, where you want to avoid excessive function calls for every keystroke",
    replies: [
      {
        name: "Ramya Iyengar",
        text: "The useEffect hook is used to trigger the API call after a specified delay (delay variable).",
        replies: [
          {
            name: "Ramya Iyengar",
            text: "useEffect cleanup function is called (when the component unmounts or when searchQuery changes).",
            replies: [
              {
                name: "Ramya Iyengar",
                text: "clearTimeout(timer) called ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ramya Iyengar",
    text: "Redux slice is a concept introduced by the Redux Toolkit, which is a set of utilities, including createSlice, that simplifies the process of writing Redux logic. A slice represents a piece of the Redux store's state, along with the reducer functions to update that state.",
    replies: [
      {
        name: "Ramya Iyengar",
        text: "initialState defines the initial state of the slice,createSlice generates the actions and reducer for the slice.reducers is an object where each key is a reducer function.toggleMenu, closeMenu, and openMenu are action creators generated by createSlice.selectMenuOpen is a selector that can be used to get the value of menuOpen from the Redux store.",
        replies: [
          {
            name: "Ramya Iyengar",
            text: "dispatch actions like toggleMenu and use the selectMenuOpen selector to access the state in your components connected to the Redux store. The Redux Toolkit simplifies many aspects of Redux development, making it more concise and efficient.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ramya Iyengar",
    text: "Recursion is a programming concept where a function calls itself in its own definition. In other words, a function that performs a specific task will call itself to repeat that task with a subset of the original problem",
    replies: [
      {
        name: "Ramya Iyengar",
        text: "In this feature CommentsList component is called recursively ",
        replies: [
          {
            name: "Ramya Iyengar",
            text: "Implementing a nested Comment feature",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex p-2 shadow-sm bg-gray-50 rounded-sm my-1">
      <AccountCircleSharpIcon />
      <div>
        <p className="mx-2 from-neutral-700 font-semibold">{name}</p>
        <p className="mx-2 from-neutral-700 font-semibold">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comm, index) => (
    <div>
      {/* comment and its reply*/}
      <Comment key={index} data={comm} />
      <div className="pl-5 border border-l-gray-600">
        {/* recursing commentList in itself */}
        <CommentsList key={index} comments={comm.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2" style={{ width: "1200px" }}>
      <h1 className="text-2xl font-bold">Comments: </h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
