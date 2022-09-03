import React from 'react';
import {Divider, Tab, Tabs} from "@blueprintjs/core";
import TableInfoEdit from "@/pages/design/table/component/table/TableInfoEdit";
import CodeTab from "@/pages/design/table/component/tab/CodeTab";
import {ModuleEntity} from "@/store/tab/useTabStore";
import TableIndexEdit from "@/pages/design/table/component/table/TableIndexEdit";


export type TableTabProps = {
  moduleEntity: ModuleEntity
};

const TableTab: React.FC<TableTabProps> = (props) => {
  console.log('TableTab13', TableTab)
  return (
    <>
      <Tabs
        id="tableNav"
        animate={false}
        renderActiveTabPanelOnly={true}
        className="tabs-table-height"
      >
        <Tab id="field" title="字段" panel={<TableInfoEdit moduleEntity={props.moduleEntity}/>}></Tab>
        <Tab id="index" title="索引" panel={<TableIndexEdit moduleEntity={props.moduleEntity}/>}></Tab>
        <Tab id="code" title="代码信息" panel={<CodeTab moduleEntity={props.moduleEntity}/>}></Tab>
      </Tabs>
    </>
  );
}

export default React.memo(TableTab)
