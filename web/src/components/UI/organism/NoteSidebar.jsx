import React from "react";
import MenuCategory from "../molecules/MenuCategory";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const NoteSidebar = ({ data, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>

        <TabPanels padding={"0"}>
          {data.map((item) => (
            <TabPanel padding={"0"}>
              <MenuCategory title={item.title} items={item.items} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default NoteSidebar;
