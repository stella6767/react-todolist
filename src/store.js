import { useRef } from "react";

// 액션
export const create = (todo) => ({
  type: "CREATE",
  todo: {
    id: todo.id, //일단은 5
    text: todo.text,
    done: false,
  }, //여러개 변수를 넘길 수 있다.
});

export const toggle = (data) => ({
  type: "TOGGLE",
  id: data,
});
export const remove = (data) => ({
  type: "REMOVE",
  id: data,
});

//const nextId = useRef(5);

//상태
const initstate = {
  todos: [
    {
      id: 1,
      text: "프로젝트 생성하기",
      done: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링하기",
      done: true,
    },
    {
      id: 3,
      text: "Context 만들기",
      done: false,
    },
    {
      id: 4,
      text: "기능 구현하기",
      done: false,
    },
  ],
  nextId: 5,
};

//액션의 결과를 걸러내는 친구
//reducer(누산기, 결과를 스택에 채우는 것) updater
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "CREATE":
      return { todos: state.todos.concat(action.todo) };
    case "TOGGLE":
      let newState = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      console.log("newState", newState);
      console.log("state.todos", state.todos);
      // let test = [...state.todos, ...newState];  //배열은 덮어쓰기가 안 됨..
      // console.log("test", test);
      return {
        todos: [...newState], //내가 return 할 때, 키 값을 안 줘서 오류가 남ㅠㅠㅠㅠ
      };
    case "REMOVE":
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };
    default:
      return state;
  }
};

export default reducer;
