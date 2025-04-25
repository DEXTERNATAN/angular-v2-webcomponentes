export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  url?: string;
  expanded?: boolean;
  children?: MenuItem[];
}
