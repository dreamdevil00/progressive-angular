export interface Badge {
  variant: string;
  text: string;
}

export interface Menu {
  [key: string]: any;
  icon?: string;
  badge?: Badge;
  text: string;
  link?: string;
  externalLink?: string;
  hide?: boolean;
  title?: boolean;
  acl?: any;
  children?: Menu[];
}
