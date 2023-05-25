import React, { useState } from "react";
import { Tabs, Tab } from "baseui/tabs-motion";
import { tabsOverrides, tabOverrides } from "../../overrides/tabOverrides";
import { ThemeProvider, LightTheme } from "baseui";
import Status from "../Status";
import Payment from "../Payment";
import { Content } from "../Components";

function DashBoard() {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Content>
      <ThemeProvider theme={LightTheme}>
        <Tabs
          overrides={tabsOverrides}
          activeKey={activeKey}
          onChange={({ activeKey }) => {
            setActiveKey(activeKey);
            console.log(activeKey);
          }}
          activateOnFocus
          fill
        >
          <Tab overrides={tabOverrides} title="Status"></Tab>
          <Tab overrides={tabOverrides} title="Payments"></Tab>
          <Tab overrides={tabOverrides} title="Overview"></Tab>
        </Tabs>
      </ThemeProvider>
      {activeKey !== "0" ? <Payment></Payment> : <Status></Status>}
    </Content>
  );
}

export default DashBoard;
