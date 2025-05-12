
export type TabItem = {
  label: string;
  href: string;
  className?: string;
};

export interface TabProps {
  tabs: TabItem[];
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}