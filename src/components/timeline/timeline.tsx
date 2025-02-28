import React, { ReactNode } from 'react';
import './timeline.css'; 

// Tipagem para o TimelineItem
interface TimelineItemProps {
  timestamp: string;
  title: string;
  description?: string;
  subtitle: string;
  type?: string;
}

export function TimelineItem({ timestamp, title, description, subtitle, type }: TimelineItemProps) {
  return (
    <li className="rb-item">
      <div className="content-wrapper">
        <div className="timestamp">
          {timestamp}
        </div>
        <div className='item-type'>
          {type}
        </div>
        <div className="item-title">
          {subtitle}
        </div>
        <div className="item-subtitle">
          {title}
        </div>
        <p className="description">
          {description}
        </p>
      </div>
    </li>
  );
}


// Tipagem para o componente Timeline
interface TimelineProps {
  children: ReactNode;
}

// Main Timeline component that receives timeline items as children
export default function Timeline({ children }: TimelineProps) {
  return (
    <main>
      <div className="rightbox">
        <div className="rb-container">
          <ul className="rb">
            {children}
          </ul>
        </div>
      </div>
    </main>
  );
}
