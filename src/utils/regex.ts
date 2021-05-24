export const character = new RegExp("^[a-zA-Z가-힣]+$");
export const characterAndSpace = new RegExp("^[a-zA-Z가-힣\\s]+$");
export const email = new RegExp("^[^@]+@\\w+(\\.\\w+)+\\w$");
export const password = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);
export const url = new RegExp("^[a-zA-Z0-9-]+$");
export const membershiplevelname = new RegExp("^[가-힣]+$");
