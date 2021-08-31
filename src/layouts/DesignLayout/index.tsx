import React from "react";
import {Fill, Fixed, Right} from "react-spaces";
import DesignHeader from "@/components/Header/DesignHeader";
import DesignLeftContent from "@/components/LeftContent/DesignLeftContent";
import './index.scss'

export interface DesignLayoutLayoutProps {
  children: any;
}

const DesignLayout: React.FC<DesignLayoutLayoutProps> = props => {
  const {children} = props;

  return (
    < Fixed width={"100%"} height={"100%"} className="bp3-dark dark-theme">
      <DesignHeader/>
      <Fill>
        <DesignLeftContent/>
        <Right size="90%">
          {children}
        </Right>
      </Fill>
    </Fixed>
  )
}
export default React.memo(DesignLayout)
