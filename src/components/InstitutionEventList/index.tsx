import React, { ReactElement } from 'react'
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

const Description = styled.div`
  flex: 0 60%;
  padding: 1rem 2rem;
  font-size: 16px;
`;

const Type = styled.span`
  flex: 0 15%;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 16px;
`;

const Status = styled.span`
  flex: 0 15%;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 16px;
`;

interface Props {
  list:IEvent[];
}

export default function InstitutionEventList({ list }: Props): ReactElement {
  return (
    <EventList>
      {
        list.map(event => (
        <EventItem key={event.id}>
          <Image src={event.thumbnail} alt=""/>
          <Description>
            <p>{event.title}</p>
            <p>- {event.description}</p>
          </Description>
          <Type>{event.type}</Type>
          <Status>{event.status}</Status>
        </EventItem>
        ))
      }
    </EventList>
  )
}