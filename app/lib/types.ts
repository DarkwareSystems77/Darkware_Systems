import type { ReactNode, ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Animation props
export interface AnimationProps {
  initial?: 'visible' | 'hidden';
  whileInView?: 'visible' | 'hidden';
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
  delay?: number;
  duration?: number;
}

// Button component types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

// Card component types
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

// Input component types
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

// Textarea component types
export interface TextareaProps extends Omit<InputProps, 'type'> {
  rows?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

// Select/Dropdown component types
export interface SelectProps extends BaseComponentProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface NavigationProps extends BaseComponentProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (href: string) => void;
}

// Section types
export interface SectionProps extends BaseComponentProps {
  id: string;
  background?: 'default' | 'dark' | 'gradient' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  fullHeight?: boolean;
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
  skills: string[];
  achievements: string;
}

// Service types
export interface Service {
  id: number;
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  features: string[];
  color: string;
  href?: string;
}

// Contact info types
export interface ContactInfo {
  icon: ComponentType<LucideProps>;
  title: string;
  value: string;
  href: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  service: string;
}

// Email service types
export interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
}

// Social link types
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// Company info types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  founded: string;
}

// Stats types
export interface Stat {
  icon: ComponentType<LucideProps>;
  value: string;
  label: string;
}

// Project types (for portfolio)
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Animation configuration types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
}

// Responsive breakpoints
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Color variants
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'green'
  | 'gray';

// Size variants
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Pagination types
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

// Modal types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
}

// Toast notification types
export interface ToastProps {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

// Loading state types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  data?: any;
}

// Theme types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
