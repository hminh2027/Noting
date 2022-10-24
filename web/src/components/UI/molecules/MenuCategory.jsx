import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Button,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
const MenuCategory = ({ title, items, className }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple className={`${className}`}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel padding={"0"}>
          <div className="flex flex-col">
            {items.map((item) => (
              <Button variant="ghost" colorScheme="teal">
                {item.name}
              </Button>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuCategory;
