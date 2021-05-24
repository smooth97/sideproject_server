import {
  IEvent,
  User,
  IBusinessCard,
  IParticipant,
  IInstitution,
  MemberShipLevel,
  ITicket,
  Paper,
  IMessage,
  IReception,
  IStage,
  ISession,
  INetworking,
  IExpo,
} from "../schemas/types";

export let users: User[] = [
  {
    id: "u1",
    email: "horong@networkdefines.com",
    firstName: "Ho",
    lastName: "Rong",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "http://m.artmug.kr/image/goods_img1/3647.jpg?ver=1554857059",
    membershiplevel: "TPC 의장",
  },
  {
    id: "u2",
    email: "horong222@nwd.com",
    firstName: "Ho",
    lastName: "Rong2",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "TPC 위원",
  },
  {
    id: "u3",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong3",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u4",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong4",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u5",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong5",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u6",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong6",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u7",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong7",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u8",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong8",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u9",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong9",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u10",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong10",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u11",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong11",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
  {
    id: "u12",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong12",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail: "https://t1.daumcdn.net/cfile/tistory/1416934A4E7A32CF0D",
    membershiplevel: "리뷰어",
  },
];

export const invitedEvents: IEvent[] = [
  {
    id: "me01",
    title: "대기업 취업 전략 수립",
    description:
      "취업의 첫 시작은 꼼꼼한 분석과 전략 수립으로부터! 적을 알고 나를 알면 백전 백승",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230741/s",
    accepted: false,
  },
  {
    id: "me02",
    title: "경향 부동산 페어",
    description:
      "변화와 혁신의 중심에 있는 부동산 시장의 모든 것! 경향 부동산 페어",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230390/s",
    accepted: false,
  },
  {
    id: "me03",
    title: "언택트 시대, 마이크로소프트 클라우드 서비스 무료 체험 교육",
    description:
      "메이븐은 언택트시대에 필요한 기업 업무 자동화/데이터 분석/업무 관리 플랫폼의 도입을 위한 교육과 서비스를 제공합니다",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230470/s",
    accepted: false,
  },
];

export const networkAdd: IBusinessCard[] = [
  {
    id: "n1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 6",
    email: "person6@gmail.com",
    institution: "서울대학교",
  },
  {
    id: "n2",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 7",
    email: "person7@gmail.com",
    institution: "서울대학교",
  },
];


export const myEvents: IEvent[] = [
  {
    id: "me1",
    title:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부자공부",
    description:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/211441/s",
  },
  {
    id: "me2",
    title:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가 살아남습니다",
    description:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/214044/s",
  },
  {
    id: "me3",
    title:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연금 편)",
    description:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/227570/s",
  },
];

export const upCommingEvents: IEvent[] = [
  {
    id: "me4",
    title: "[온라인] 2021-제1회 엔젤리더스포럼",
    description: "[온라인] 2021-제1회 엔젤리더스포럼",
    startDate: "2020-02-20",
    endDate: "2020-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230886/s",
  },
];

export const pastEvents: IEvent[] = [
  {
    id: "me5",
    title: "해외농업자원개발 온라인교육",
    description: "해외농업자원개발 온라인교육",
    startDate: "2020-02-20",
    endDate: "2020-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230924/s",
  },
  {
    id: "me6",
    title: "IFFF ICBC 2021[2021 주린이스쿨] 주린이들의 주식스터디",
    description: "[2021 주린이스쿨] 주린이들의 주식스터디",
    startDate: "2021-02-20",
    endDate: "2023-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/231082/s",
  },
];

export const networkings: IBusinessCard[] = [
  {
    id: "n1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 1",
    email: "person@gmail.com",
    institution: "서울대학교",
  },
  {
    id: "n2",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 2",
    email: "person@gmail.com",
    institution: "서울대학교",
  },
  {
    id: "n3",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 3",
    email: "person@gmail.com",
    institution: "서울대학교",
  },
  {
    id: "n4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 4",
    email: "person@gmail.com",
    institution: "서울대학교",
  },
  {
    id: "n5",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 5",
    email: "person@gmail.com",
    institution: "서울대학교",
  },
];

export const institutionEvents: IEvent[] = [
  {
    id: "me1",
    title:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부자공부",
    description:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/211441/s",
    status: "개설중",
    type: "학술대회",
  },
  {
    id: "me2",
    title:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가 살아남습니다",
    description:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/214044/s",
    status: "진행중",
    type: "학술대회",
  },
  {
    id: "me3",
    title:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연금 편)",
    description:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/227570/s",
    status: "종료",
    type: "학술대회",
  },
  {
    id: "me4",
    title: "[온라인] 2021-제1회 엔젤리더스포럼",
    description: "[온라인] 2021-제1회 엔젤리더스포럼",
    startDate: "2020-02-20",
    endDate: "2020-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230886/s",
    status: "종료",
    type: "학술대회",
  },
];

export const participants: IParticipant[] = [
  {
    id: "p1",
    institution: "ONOFFMIX",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 1",
    email: "person@gmail.com",
    eventName:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부자공부",
  },
  {
    id: "p2",
    institution: "ONOFFMIX",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 2",
    email: "person@gmail.com",
    eventName:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가 살아남습니다",
  },
  {
    id: "p3",
    institution: "ONOFFMIX",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU",
    name: "사람 3",
    email: "person@gmail.com",
    eventName:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연금 편)",
  },
];

export const eventTickets: ITicket[] = [
  {
    eventId: 0,
    id: 1,
    name: "VIP",
    price: 15,
    currency: 1,
    issuePeriod: "2021.12.23 ~ 12.25",
    description: "모든 세션 참여 가능",
    amount: 50
  },
  {
    eventId: 0,
    id: 2,
    name: "프리미엄",
    price: 10,
    currency: 1,
    issuePeriod: "2021.12.23 ~ 12.25",
    description: "논문 투고 가능\n모든 세션 참여 가능",
    amount: 100,
  },
  {
    eventId: 0,
    id: 3,
    name: "기본",
    price: 5,
    currency: 1,
    issuePeriod: "2021.12.23 ~ 12.25",
    description: "일반 참여\n5개 세션 참여 가능",
    amount: 300,
  },
  {
    eventId: 0,
    id: 4,
    name: "무료",
    price: 0,
    currency: 1,
    issuePeriod: "2021.12.23 ~ 12.25",
    description: "일반 참여\n5개 세션 참여 가능",
    amount: 100,
  },
];

export const memberShipLevels: MemberShipLevel[] = [
  {
    id: "1",
    title: "TPC 의장",
    auth1: true,
    auth2: true,
    auth3: false,
    auth4: false,
    auth5: false,
  },
  {
    id: "2",
    title: "TPC 위원",
    auth1: true,
    auth2: true,
    auth3: false,
    auth4: false,
    auth5: false,
  },
  {
    id: "3",
    title: "리뷰어",
    auth1: true,
    auth2: true,
    auth3: false,
    auth4: false,
    auth5: false,
  },
];

export const participatingEvents: IEvent[] = [
  {
    id: "me1",
    title:
      "한국토지투자공부방",
    description:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/211441/s",
  },
  {
    id: "me2",
    title:
      "1인창업의 시대",
    description:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/214044/s",
  },
  {
    id: "me3",
    title:
      "일대일 재테크과외",
    description:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/227570/s",
  },
];

export const onGoingEvents: IEvent[] = [
  {
    id: "me1",
    title:
      "ICBC 2021",
    description:
      "한국토지투자공부방 한국토지투자배우기(시흥,광명,화성,평택) 부...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/211441/s",
    status: "개설중",
    type: "학술대회",
  },
  {
    id: "me2",
    title:
      "1인창업의 시대",
    description:
      "앞으로는 1인창업의 시대가 도래할 것입니다. 먼저준비하는자가...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/214044/s",
    status: "진행중",
    type: "학술대회",
  },
  {
    id: "me3",
    title:
      "일대일 재테크과외",
    description:
      "[재테크과외 일대일로] 나는 재테크도 과외받는다! (주식, 펀드, 연...",
    startDate: "2020-02-20",
    endDate: "2021-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/227570/s",
    status: "종료",
    type: "학술대회",
  },
  {
    id: "me4",
    title: "엔젤리더스포럼",
    description: "[온라인] 2021-제1회 엔젤리더스포럼",
    startDate: "2020-02-20",
    endDate: "2020-10-10",
    organizer: "주최자",
    thumbnail: "https://cfile1.onoffmix.com/images/event/230886/s",
    status: "종료",
    type: "학술대회",
  },
];

export const institutions: IInstitution[] = [];


export let authors: User[] = [
  {
    id: "u1",
    email: "horong111@nwd.com",
    firstName: "Ho",
    lastName: "Rong",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail:
      "https://stickershop.line-scdn.net/stickershop/v1/product/1925283/LINEStorePC/main.png;compress=true",
    membershiplevel: "TPC 의장",
  },
  {
    id: "u2",
    email: "horong222@nwd.com",
    firstName: "Ho",
    lastName: "Rong",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail:
      "https://stickershop.line-scdn.net/stickershop/v1/product/1925283/LINEStorePC/main.png;compress=true",
    membershiplevel: "TPC 위원",
  },
  {
    id: "u3",
    email: "horong333@nwd.com",
    firstName: "Ho",
    lastName: "Rong",
    country: "한국",
    institution: "NWD",
    position: "Developer",
    password: "Horong1234!@#$",
    thumbnail:
      "https://stickershop.line-scdn.net/stickershop/v1/product/1925283/LINEStorePC/main.png;compress=true",
    membershiplevel: "리뷰어",
  },
];



export let papers: Paper[] = [
  {
    id: "u1",
    paperId: "2850",
    title: "Testing Paper #1",
    file: "Test_paper.pdf",
    status: "Not Available"
  },
];
export const messageList: IMessage[] = [
  { user: users[0], id: 1, content: "안녕하세요!", time: new Date() },
  { user: users[1], id: 2, content: "예", time: new Date() },
  { user: users[2], id: 3, content: "예", time: new Date() },
  { user: users[0], id: 4, content: "피드백 부탁드립니다", time: new Date() },
  { user: users[1], id: 5, content: "이따가요~", time: new Date() },
  { user: users[2], id: 6, content: "싫어요~", time: new Date() },
  { user: users[0], id: 7, content: "언제쯤 회신 주시나요?", time: new Date() },
  { user: users[1], id: 8, content: "1분 지났는데요 ...", time: new Date() },
  {
    user: users[0],
    id: 9,
    content: "그럼 몇분 뒤에 회신 주시나요? 1분? 5분?",
    time: new Date(),
  },
  { user: users[1], id: 10, content: "...", time: new Date() },
  { user: users[0], id: 11, content: "메롱...", time: new Date() },
  { user: users[1], id: 12, content: "?!", time: new Date() },
];

export const reception: IReception = {
  id: 1,
  event: {
    id: "1",
    title: "ICBC 2021",
    description: "세계 최고의 통신학회 ICBC 입니다.",
    introduction:
      "개발사 스캐터랩이 운영 중인 AI 챗봇 이루다는 사용자들과 나눈 성적, 성소수자 혐오 대화 내용이 인터넷 커뮤니티에 게재되면서 논란이 시작됐다. 이후 스캐터랩이 이루다를 개발하는 과정에서 연애 분석 앱 ‘연애의 과학’으로 이용자들의 카카오톡 데이터를 수집해 사용한 과정에서 개인정보보호법을 위반했습니다.",
    startDate: new Date(),
    endDate: new Date(),
    homepage: "https://sendia.io",
    sns: "https://sendia.io",
    email: "https://sendia.io",
    logo:
      "https://icbc2021.ieee-icbc.org/sites/icbc2021.ieee-icbc.org/files/IEEE-ICBC-Logo.png",
  },
  mainImage:
    "https://i.pinimg.com/originals/55/55/94/5555948fdaf0ff4f2b93bd7fc6ffdb35.jpg",
  planList: [
    { id: 1, startTime: new Date(), endTime: new Date(), name: "스테이지" },
    { id: 2, startTime: new Date(), endTime: new Date(), name: "세션 1" },
    { id: 3, startTime: new Date(), endTime: new Date(), name: "세션 2" },
  ],
};

export const stage: IStage = {
  id: 1,
  event: {
    id: "1",
    title: "ICBC 2021",
    description: "세계 최고의 통신학회 ICBC 입니다.",
    introduction:
      "개발사 스캐터랩이 운영 중인 AI 챗봇 이루다는 사용자들과 나눈 성적, 성소수자 혐오 대화 내용이 인터넷 커뮤니티에 게재되면서 논란이 시작됐다. 이후 스캐터랩이 이루다를 개발하는 과정에서 연애 분석 앱 ‘연애의 과학’으로 이용자들의 카카오톡 데이터를 수집해 사용한 과정에서 개인정보보호법을 위반했습니다.",
    startDate: new Date(),
    endDate: new Date(),
    homepage: "https://sendia.io",
    sns: "https://sendia.io",
    email: "https://sendia.io",
    logo:
      "https://icbc2021.ieee-icbc.org/sites/icbc2021.ieee-icbc.org/files/IEEE-ICBC-Logo.png",
  },
  keynoteList: [
    {
      id: 1,
      status: "진행",
      type: "키노트",
      title: "인공지능이 열어갈 시대",
      lecturer: "호롱",
      startDate: new Date(),
      endDate: new Date(),
      pdf: "",
      video: "",
    },
    {
      id: 2,
      status: "진행",
      type: "키노트",
      title: "인공지능이 열어갈 시대",
      lecturer: "호롱",
      startDate: new Date(),
      endDate: new Date(),
      pdf: "",
      video: "",
    },
    {
      id: 3,
      status: "진행",
      type: "키노트",
      title: "인공지능이 열어갈 시대",
      lecturer: "호롱",
      startDate: new Date(),
      endDate: new Date(),
      pdf: "",
      video: "",
    },
    {
      id: 4,
      status: "진행",
      type: "키노트",
      title: "인공지능이 열어갈 시대",
      lecturer: "호롱",
      startDate: new Date(),
      endDate: new Date(),
      pdf: "",
      video: "",
    },
    {
      id: 5,
      status: "진행",
      type: "키노트",
      title: "인공지능이 열어갈 시대",
      lecturer: "호롱",
      startDate: new Date(),
      endDate: new Date(),
      pdf: "",
      video: "",
    },
  ],
};

export const session: ISession = {
  id: 1,
  event: {
    id: "1",
    title: "ICBC 2021",
    description: "세계 최고의 통신학회 ICBC 입니다.",
    introduction:
      "개발사 스캐터랩이 운영 중인 AI 챗봇 이루다는 사용자들과 나눈 성적, 성소수자 혐오 대화 내용이 인터넷 커뮤니티에 게재되면서 논란이 시작됐다. 이후 스캐터랩이 이루다를 개발하는 과정에서 연애 분석 앱 ‘연애의 과학’으로 이용자들의 카카오톡 데이터를 수집해 사용한 과정에서 개인정보보호법을 위반했습니다.",
    startDate: new Date(),
    endDate: new Date(),
    homepage: "https://sendia.io",
    sns: "https://sendia.io",
    email: "https://sendia.io",
    logo:
      "https://icbc2021.ieee-icbc.org/sites/icbc2021.ieee-icbc.org/files/IEEE-ICBC-Logo.png",
  },
  sessionItemList: [
    {
      id: 1,
      mainPoster:
        "https://eventusstorage.blob.core.windows.net/evs/Image/swik/19797/ProjectInfo/Cover/5205a68ac3654f97b5573f9d8784f7f6.jpg",
      user: users[0],
      poster:
        "http://www.personal.psu.edu/drs18/postershow/images/poster_rough.jpg",
      participantsCount: 20,
      totalCount: 50,
      vod: "http://sendia.io",
      description: "해당 세션은 인공지능에 관한 세션입니다.",
    },
    {
      id: 2,
      mainPoster:
        "https://eventusstorage.blob.core.windows.net/evs/Image/swik/19797/ProjectInfo/Cover/5205a68ac3654f97b5573f9d8784f7f6.jpg",
      user: users[0],
      poster:
        "http://www.personal.psu.edu/drs18/postershow/images/poster_rough.jpg",
      participantsCount: 20,
      totalCount: 50,
      vod: "http://sendia.io",
      description: "해당 세션은 인공지능에 관한 세션입니다.",
    },
    {
      id: 3,
      mainPoster:
        "https://eventusstorage.blob.core.windows.net/evs/Image/swik/19797/ProjectInfo/Cover/5205a68ac3654f97b5573f9d8784f7f6.jpg",
      user: users[0],
      poster:
        "http://www.personal.psu.edu/drs18/postershow/images/poster_rough.jpg",
      participantsCount: 20,
      totalCount: 50,
      vod: "http://sendia.io",
      description: "해당 세션은 인공지능에 관한 세션입니다.",
    },
    {
      id: 4,
      mainPoster:
        "https://eventusstorage.blob.core.windows.net/evs/Image/swik/19797/ProjectInfo/Cover/5205a68ac3654f97b5573f9d8784f7f6.jpg",
      user: users[0],
      poster:
        "http://www.personal.psu.edu/drs18/postershow/images/poster_rough.jpg",
      participantsCount: 20,
      totalCount: 50,
      vod: "http://sendia.io",
      description: "해당 세션은 인공지능에 관한 세션입니다.",
    },
    {
      id: 5,
      mainPoster:
        "https://eventusstorage.blob.core.windows.net/evs/Image/swik/19797/ProjectInfo/Cover/5205a68ac3654f97b5573f9d8784f7f6.jpg",
      user: users[0],
      poster:
        "http://www.personal.psu.edu/drs18/postershow/images/poster_rough.jpg",
      participantsCount: 20,
      totalCount: 50,
      vod: "http://sendia.io",
      description: "해당 세션은 인공지능에 관한 세션입니다.",
    },
  ],
};

export const networking: INetworking = {
  id: 1,
  event: {
    id: "1",
    title: "ICBC 2021",
    description: "세계 최고의 통신학회 ICBC 입니다.",
    introduction:
      "개발사 스캐터랩이 운영 중인 AI 챗봇 이루다는 사용자들과 나눈 성적, 성소수자 혐오 대화 내용이 인터넷 커뮤니티에 게재되면서 논란이 시작됐다. 이후 스캐터랩이 이루다를 개발하는 과정에서 연애 분석 앱 ‘연애의 과학’으로 이용자들의 카카오톡 데이터를 수집해 사용한 과정에서 개인정보보호법을 위반했습니다.",
    startDate: new Date(),
    endDate: new Date(),
    homepage: "https://sendia.io",
    sns: "https://sendia.io",
    email: "https://sendia.io",
    logo:
      "https://icbc2021.ieee-icbc.org/sites/icbc2021.ieee-icbc.org/files/IEEE-ICBC-Logo.png",
  },
}

export const expo: IExpo = {
  id: 1,
  event: {
    id: "1",
    title: "ICBC 2021",
    description: "세계 최고의 통신학회 ICBC 입니다.",
    introduction:
      "개발사 스캐터랩이 운영 중인 AI 챗봇 이루다는 사용자들과 나눈 성적, 성소수자 혐오 대화 내용이 인터넷 커뮤니티에 게재되면서 논란이 시작됐다. 이후 스캐터랩이 이루다를 개발하는 과정에서 연애 분석 앱 ‘연애의 과학’으로 이용자들의 카카오톡 데이터를 수집해 사용한 과정에서 개인정보보호법을 위반했습니다.",
    startDate: new Date(),
    endDate: new Date(),
    homepage: "https://sendia.io",
    sns: "https://sendia.io",
    email: "https://sendia.io",
    logo:
      "https://icbc2021.ieee-icbc.org/sites/icbc2021.ieee-icbc.org/files/IEEE-ICBC-Logo.png",
  },
}
