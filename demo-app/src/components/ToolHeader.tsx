import React, { FC } from 'react';

interface ToolHeaderProps {
  headerText: string;
}

export const ToolHeader: FC<ToolHeaderProps> = (props) => {

  return <header>
    <h1>{props.headerText}</h1>
  </header>;

};