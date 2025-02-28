import React from 'react';
import Timeline, { TimelineItem } from '@/components/timeline/timeline';  // Ajuste o caminho conforme necessário

export default function Home() {
  return (
    <Timeline>
      <TimelineItem timestamp="2024 - ATUAL" subtitle='Desenvolvimento de Sistemas' title="Senai Márcio Leal" type={'TÉCNICO'}  />
      <TimelineItem timestamp="19th May 2020" title="Mia Redwood commented on your last post." type={'TÉCNICO'} subtitle={''} />
      <TimelineItem timestamp="17th June 2020" title="Lucas McAlister just sent you a message." description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt magni debitis odio beatae explicabo molestias nobis, autem, quod excepturi sint nam inventore iusto quos tempore odit sequi expedita quidem.' subtitle={''} />
    </Timeline>
  );
}
