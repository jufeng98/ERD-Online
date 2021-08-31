import React from 'react';
import {Alignment, Button, ButtonGroup, Navbar, NavbarDivider} from "@blueprintjs/core";
import {Left, Right, Top} from "react-spaces";
import {Popover2} from "@blueprintjs/popover2";
import {FileMenu} from "@/pages/project/home/component/FileMenu";


export type DesignHeaderProps = {};

const DesignHeader: React.FC<DesignHeaderProps> = (props) => {
  return (
    <Top size="5.5%">
      <Left size={"80%"}>
        <Navbar>
          <Navbar.Group align={Alignment.CENTER}>
            <Popover2 content={<FileMenu/>} placement={"bottom-start"}>
              <Button icon={"menu"}/>
            </Popover2>
            <NavbarDivider/>
            <ButtonGroup minimal={true}>
              <Popover2 content={<FileMenu/>} placement={"bottom-start"}>
                <Button rightIcon={"caret-down"} text={"项目"}/>
              </Popover2>
            </ButtonGroup>
            <NavbarDivider/>
            <ButtonGroup minimal={true}>
              <Popover2 content={<FileMenu/>} placement={"bottom-start"}>
                <Button rightIcon={"caret-down"} text={"版本"}/>
              </Popover2>
            </ButtonGroup>
            <NavbarDivider/>
            <ButtonGroup minimal={true}>
              <Popover2 content={<FileMenu/>} placement={"bottom-start"}>
                <Button rightIcon={"caret-down"} text={"导入"}/>
              </Popover2>
            </ButtonGroup>
            <NavbarDivider/>
            <ButtonGroup minimal={true}>
              <Popover2 content={<FileMenu/>} placement={"bottom-start"}>
                <Button rightIcon={"caret-down"} text={"导出"}/>
              </Popover2>
            </ButtonGroup>
            <NavbarDivider/>
            <Button className="bp3-minimal" rightIcon="cog" text="设置"/>
          </Navbar.Group>
        </Navbar>
      </Left>
      <Right size={"20%"}>
        <Navbar>
          <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" icon="people" title="用户"/>
            <NavbarDivider/>
            <Button className="bp3-minimal" icon="share" title="邀请协作"/>
            <NavbarDivider/>
            <Button className="bp3-minimal" icon="notifications" title="通知"/>
            <NavbarDivider/>
            <Button className="bp3-minimal" icon="chat" title="聊天"/>
            <NavbarDivider/>
            <Button className="bp3-minimal" icon="tick-circle" title="已保存"/>
          </Navbar.Group>
        </Navbar>
      </Right>
    </Top>
  )
};

export default React.memo(DesignHeader);
