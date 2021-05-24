import { BooleanLiteral } from "typescript";

export interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  country?: string;
  institution?: string;
  position?: string;
  password?: string;
  thumbnail?: string;
  membershiplevel?: string;
}

export interface Password {
  id?: string;
  password?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

export interface IEvent {
  id: string;
  url?: string;
  title?: string;
  description?: string;
  startDate?: any;
  endDate?: any;
  organizer?: string;
  thumbnail?: string;
  type?: string;
  status?: string;
  paidOrNot?: string;
  eventId?: number;
  startTime?: any;
  endTime?: any;
  evtStage?: boolean;
  evtSession?: boolean;
  evtNetworking?: boolean;
  evtExpo?: boolean;
  isFree?: boolean;
  currency?: number; // 1: USD, 2: WON
  hashtag?: string;
  accepted?: boolean;
  summary?: string;
  homepage?: string;
  email?: string;
  sns?: string;
  introduction?: string;
  logo?: string;
}

export interface IBusinessCard {
  id: string;
  thumbnail?: string;
  name?: string;
  email?: string;
  institution?: string;
}

export interface IParticipant {
  id: string;
  institution?: string;
  thumbnail?: string;
  name?: string;
  email?: string;
  eventName?: string;
}

export interface IInstitution {
  id: string;
  name: string;
  homepage?: string;
  email: string;
  introduction: string;
  option: string;
}

export interface ITicket {
  eventId: number;
  id: number;
  name?: string;
  price?: number;
  cap?: number;
  units?: string;
  details?: string;
  currency?: number;
  issuePeriod?: string;
  amount?: number;
  description?: string;
}

export interface MemberShipLevel {
  id: string;
  title: string;
  auth1: boolean;
  auth2: boolean;
  auth3: boolean;
  auth4: boolean;
  auth5: boolean;
}


export interface Paper {
  id: string;
  paperId: string;
  title: string;
  file: string;
  status: string;
}
export interface IMessage {
  id: number;
  user: User;
  content: string;
  time: Date;
}

export interface IPlan {
  id: number;
  name?: string;
  startTime?: Date;
  endTime?: Date;
}

export interface IReception {
  id: number;
  event: IEvent;
  mainImage?: string;
  planList?: IPlan[];
}

export interface IKeynote {
  id: number;
  status?: string;
  lecturer?: string;
  title?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  pdf?: string;
  video?: string;
}

export interface IStage {
  id: number;
  event?: IEvent;
  keynoteList?: IKeynote[];
}

export interface ISessionItem {
  id: number;
  user?: User;
  event?: IEvent;
  mainPoster?: string;
  poster?: string;
  participantsCount?: number;
  totalCount?: number;
  vod?: string;
  description?: string,
}

export interface ISession {
  id: number;
  user?: User;
  event?: IEvent;
  sessionItemList?: ISessionItem[];
}

export interface INetworking {
  id: number;
  event?: IEvent;
}

export interface IExpo {
  id: number;
  event?: IEvent;
}
