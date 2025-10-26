import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tech: string[];
}

export interface ContactLink {
  name: string;
  value: string;
  link: string;
  icon: IconType; // ✅ Changed from string to IconType
  hoverColor: string;
}

export interface NavItem {
  name: string;
  href: string;
}