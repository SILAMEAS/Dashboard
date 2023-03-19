import {ReactNode} from 'react';

export interface Type {
  goto: string;
  listName: string;
  listIcon: ReactNode;
  child?: ReactNode;
  IsNested?: boolean;
}
