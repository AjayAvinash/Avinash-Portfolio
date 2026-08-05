import React from 'react';
import { NotebookItem } from '@/types/notebook';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Pill } from '@/components/ui/Pill';

interface NotebookCardProps {
  item: NotebookItem;
}

export const NotebookCard: React.FC<NotebookCardProps> = ({ item }) => {
  return (
    <Card hoverable className="group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs text-text-muted mb-2">
          <Pill variant="primary">{item.category}</Pill>
          <span>{item.readTime}</span>
        </div>
        <Heading as="h3" size="sm" className="group-hover:text-primary transition-colors">
          {item.title}
        </Heading>
        <p className="mt-2 text-xs text-text-secondary line-clamp-3">{item.excerpt}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-text-muted flex justify-between items-center">
        <span>{item.date}</span>
        <span className="group-hover:underline">Read Thought →</span>
      </div>
    </Card>
  );
};
