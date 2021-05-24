import {
  IEvent,
  Password,
  User,
  IBusinessCard,
  IParticipant,
  IInstitution,
  ITicket,
  MemberShipLevel,
  Paper,
  IMessage,
  IReception,
  ISession,
  IStage,
  INetworking,
  IExpo,
} from "../schemas/types";

import {
  onGoingEvents,
  participatingEvents,
  invitedEvents,
  networkAdd,
  myEvents,
  pastEvents,
  upCommingEvents,
  users,
  networkings,
  participants,
  institutionEvents,
  memberShipLevels,
  institutions,
  eventTickets,
  authors,
  papers,
  messageList,
  reception,
  stage,
  session,
  networking,
  expo,
} from "./db";

const testURL = "https://jsonplaceholder.typicode.com/posts";
// GET (List) - https://jsonplaceholder.typicode.com/posts
// GET (One) - https://jsonplaceholder.typicode.com/posts/1
// POST - https://jsonplaceholder.typicode.com/posts
// PUT - https://jsonplaceholder.typicode.com/posts/1
// DELETE - https://jsonplaceholder.typicode.com/posts/1

const serverURL = process.env.REACT_APP_SERVER_URL;

export const getProfile = function (id: string) {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<User | undefined>((resolve, reject) => {
      const response = users.find((e) => e.id === id);
      resolve(response);
    });
  });
};

export const modifyProfile = function (newData: User) {
  return fetch(`${testURL}/1`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<User | undefined>((resolve, reject) => {
      const response = newData;
      resolve(response);
    });
  });
};

export const modifyPassword = function (newData: Password) {
  return fetch(`${testURL}/1`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise((resolve, reject) => {
      const response = newData;
      resolve(response);
    });
  });
};

export const getInvitedEvents = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = invitedEvents;
      resolve(response);
    });
  });
};

export const getNetworkAdd = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IBusinessCard[]>((resolve, reject) => {
      const response = networkAdd;
      resolve(response);
    });
  });
};


export const getMyEvents = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = myEvents;
      resolve(response);
    });
  });
};

export const getUpCommingEvents = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = upCommingEvents;
      resolve(response);
    });
  });
};

export const getPastEvents = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = pastEvents;
      resolve(response);
    });
  });
};

export const getNetworkings = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IBusinessCard[]>((resolve, reject) => {
      const response = networkings;
      resolve(response);
    });
  });
};

export const getInstitutionEvent = function ({ id }: User) {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = institutionEvents;
      resolve(response);
    });
  });
};

export const getParticipantList = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IParticipant[]>((resolve, reject) => {
      const response = participants;
      resolve(response);
    });
  });
};

export const addInstitutionEvent = function (event: IEvent) {
  return fetch(`${testURL}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent | null>((resolve, reject) => {
      const response = event;
      resolve(response);
    });
  });
};

export const getInstitution = function (id: string) {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IInstitution | undefined>((resolve, reject) => {
      const response = institutions.find((e) => e.id === id);
      resolve(response);
    });
  });
};

export const signup = function (formState: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = formState;
  return fetch(`${serverURL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  }).then((response) => response.json());
};

export const login = function (formState: { email: string; password: string }) {
  const { email, password } = formState;
  return fetch(`${serverURL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then((res) => res.json());
};

export const getUserInfo = function () {
  return fetch(`${serverURL}/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => response.json());
};

export const getMemberShipLevels = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<MemberShipLevel[]>((resolve, reject) => {
      const response = memberShipLevels;
      resolve(response);
    });
  });
};

export const getUserByEmail = function (email: string) {
  return new Promise<User | undefined>((resolve, reject) => {
    const response = users.find((e) => e.email === email);
    resolve(response);
  });
};

export const getInstitutionMembers = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<User[]>((resolve, reject) => {
      const response = users;
      resolve(response);
    });
  });
};


export const logout = function () {
  return fetch(`${serverURL}/logout`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => {
    return response.json();
  });
};

export const getTicketList = function (eventId: number) {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<ITicket[] | undefined>((resolve, reject) => {
      const response = eventTickets;
      resolve(response);
    });
  });
};

export const addTicket = function (ticket: ITicket) {
  return fetch(`${testURL}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<ITicket | null>((resolve, reject) => {
      const response = ticket;
      resolve(response);
    });
  });
};

export const modifyEventInfo = function (newData: IEvent) {
  return fetch(`${testURL}/1`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise((resolve, reject) => {
      const response = newData;
      resolve(response);
    });
  });
};

export const getParticipatingEvents = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IEvent[]>((resolve, reject) => {
      const response = participatingEvents;
      resolve(response);
    });
  });
};

export const getOngoingEvents = function () {
  return new Promise<IEvent[]>((resolve, reject) => {
    const response = onGoingEvents;
    resolve(response);
  })
}



export const getAuthorLists = function () {
  return new Promise<User[]>((resolve, reject) => {
    const response = authors;
    resolve(response);
  })
}


export const getPaperLists = function () {
  return new Promise<Paper[]>((resolve, reject) => {
    const response = papers;
    resolve(response);
  })
};


export const getEventParticipantList = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<User[]>((resolve, reject) => {
      const response = users;
      resolve(response);
    });
  });
};

export const getMessageList = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IMessage[]>((resolve, reject) => {
      const response = messageList;
      resolve(response);
    });
  });
};

export const getReception = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IReception>((resolve, reject) => {
      const response = reception;
      resolve(response);
    });
  });
};

export const getStage = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IStage>((resolve, reject) => {
      const response = stage;
      resolve(response);
    });
  });
};

export const getSession = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<ISession>((resolve, reject) => {
      const response = session;
      resolve(response);
    });
  });
};

export const getNetwork = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<INetworking>((resolve, reject) => {
      const response = networking;
      resolve(response);
    });
  });
};

export const getExpo = function () {
  return fetch(`${testURL}/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    // }).then((response) => response.json());
  }).then((response) => {
    return new Promise<IExpo>((resolve, reject) => {
      const response = expo;
      resolve(response);
    });
  });
};
