import { ProjectCategory } from '@/types/project';

interface CategoryConfig {
  color: string;
  bgColor: string;
  gradient: string;
  accentColor: string;
}

export const categoryConfig: Record<ProjectCategory, CategoryConfig> = {
  'DÉVELOPPER': {
    color: 'text-blue-800',
    bgColor: 'bg-gradient-to-r from-blue-200 to-cyan-200',
    gradient: 'from-blue-200 to-cyan-200',
    accentColor: 'bg-blue-200'
  },
  'CONCEVOIR': {
    color: 'text-purple-800',
    bgColor: 'bg-gradient-to-r from-purple-200 to-pink-200',
    gradient: 'from-purple-200 to-pink-200',
    accentColor: 'bg-purple-200'
  },
  'EXPRIMER': {
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-rose-200 to-amber-200',
    gradient: 'from-rose-200 to-amber-200',
    accentColor: 'bg-rose-200'
  },
  'COMPRENDRE': {
    color: 'text-emerald-800',
    bgColor: 'bg-gradient-to-r from-emerald-200 to-teal-200',
    gradient: 'from-emerald-200 to-teal-200',
    accentColor: 'bg-emerald-200'
  },
  'ENTREPRENDRE': {
    color: 'text-indigo-800',
    bgColor: 'bg-gradient-to-r from-indigo-200 to-violet-200',
    gradient: 'from-indigo-200 to-violet-200',
    accentColor: 'bg-indigo-200'
  }
}; 