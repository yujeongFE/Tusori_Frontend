import React from "react";
import { useState } from "react";
import { FlexBox } from "./Style";
import IndustrySidebar from "components/IndustrySideBar";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelected = (item: string | null) => {
    setSelectedItem(item);
  };

  return (
    <FlexBox>
      <IndustrySidebar onItemSelected={handleItemSelected} />
    </FlexBox>
  );
};

export default Index;
