import React, { ReactElement, useState } from 'react'
import styled from 'styled-components';
import { IEvent } from '../../schemas/types';

const EventList = styled.ul`
  width: 80%;
  margin: 0 auto;
`;

const EventItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  border-top: 1px solid #bcbcbc;
  &:last-child {
    border-bottom: 1px solid #bcbcbc;
  }
`;

const Image = styled.img`
  flex: 0 0 auto;
  height: 80px;
  border-radius: 3px;
`;

const Description = styled.p`
  width: 80%;
  flex: 1 auto;
  padding: 1rem 2rem;
  font-size: 16px;
`;

const Organizer = styled.span`
  flex: 0 200px;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 16px;
`;

const Button = styled.button`
  width: 150px;
  height: 80px;
  background-color: #4B89DC;
  padding: 1rem 2rem;
  color: white;
`

interface Props {
  eventList:IEvent[];
}

export default function index({ eventList }: Props): ReactElement {

  const EventItemLists = eventList.map(event => <EventItem key={event.id}>
                                  <Image src={event.thumbnail} alt=""/>
                                  <Description>
                                  <p>{event.title}</p>
                                  <p>- {event.description}</p>
                                  </Description>
                                  <Organizer>{event.organizer}</Organizer>
                                  {event.accepted === false && <Button>초대수락</Button>}
                                  </EventItem>
  )

  return (
    <EventList>
      {EventItemLists}
    </EventList>
  )
}
