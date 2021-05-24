import * as REGEX from "./regex";

export function characterValidation(value: string | undefined): string {
  if (!REGEX.character.test(value || "")) {
    return "형식에 맞지 않습니다 (한글, 영문 대소문자)";
  } else {
    return "";
  }
}

export function characterAndSpaceValidation(value: string | undefined): string {
  if (!REGEX.characterAndSpace.test(value || "")) {
    return "형식에 맞지 않습니다 (한글, 영문 대소문자, 공백)";
  } else {
    return "";
  }
}

export function emailValidation(value: string) {
  if (!REGEX.email.test(value)) {
    return "형식에 맞지 않습니다 (XXX@XXX.XXX)";
  } else {
    return "";
  }
}

export function passwordValidation(value: string) {
  if (!REGEX.password.test(value)) {
    return "형식에 맞지 않습니다 (영문 대소문자, 특수문자, 숫자 포함 8자리 이상)";
  } else {
    return "";
  }
}

export function confirmPasswordValidation(
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  } else {
    return "";
  }
}

export function urlValidation(url: string) {
  if (!REGEX.url.test(url)) {
    return "URL 형식에 맞지 않습니다. (영문 대소문자, 하이폰)";
  } else {
    return "";
  }
}

export function startDateValidation(startDate: Date) {
  const now = new Date();
  const isBeforeToday = startDate.getTime() - now.getTime() < 0;
  if (isBeforeToday) {
    return "현재 시간보다 이후의 날짜를 선택해주세요";
  } else {
    return "";
  }
}

export function endDateValidation(startDate: Date, endDate: Date) {
  const isBeforeStartDate = endDate.getTime() - startDate.getTime() < 0;
  if (isBeforeStartDate) {
    return "시작일 보다 이후의 날짜를 선택해주세요";
  } else {
    return "";
  }
}

export function currencyValidation(currency: number | undefined): string {
  if (!currency) {
    return "단위 값이 존재하지 않습니다";
  } else if (![1, 2].includes(currency)) {
    return "잘못된 값을 입력하였습니다";
  } else {
    return "";
  }
}

export function toggleValidation(...toggles: boolean[]): string {
  let isNotSelected = true;
  toggles.forEach((toggle) => (isNotSelected = isNotSelected && !toggle));

  if (isNotSelected) {
    return "버튼을 선택해주세요";
  } else {
    return "";
  }
}
export function memberShipLevelNameValidation(value: string) {
  if (!REGEX.membershiplevelname.test(value)) {
    return "형식에 맞지 않습니다 (한글)";
  } else {
    return "";
  }
}
