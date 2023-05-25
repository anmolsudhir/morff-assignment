import React, { useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import { Card, StyledBody } from "baseui/card";
import { ParagraphSmall } from "baseui/typography";
import axios from "axios";
import IMAGE from "../assets/images/27 2.svg";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { LoadingComponent, Quote } from "../components/Components";
import { narrowItemProps, mainItemProps } from "../overrides/props";
import { cardOverrides } from "../overrides/topCardOverrides";
import DashBoard from "../components/dashboard/DashBoard";
import { Content } from "../components/Components";

const flexGridStyle = {
  flexGridColumnCount: 3,
  height: "100vh",
  width: "100vw",
  backgroundColor: "white",
  boxSizing: "inherit",
  margin: 0,
  padding: 0,
};

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  // wrapping fetch in useCallbacl
  const fetchQuote = useCallback(async () => {
    try {
      //creating the quote from the API
      const quoteObject = await axios.get(
        "https://quotesondesign.com/wp-json/wp/v2/posts/"
      );
      const idx = Math.floor(Math.random() * quoteObject.data?.length);
      const quoteContent = quoteObject.data[idx].yoast_head_json.og_description;
      const quoteTitle = quoteObject.data[idx].title.rendered;
      const finalQuote = quoteContent + " - " + quoteTitle;
      ref.current.innerHTML = finalQuote; //final quote to be displayed

      // displaying quote for 5 seconds as loading screen
      setTimeout(() => setIsLoading(false), 2000);
    } catch {
      console.error("error");
    }
  }, []);

  // fetching a new quote everytime the page is rendered
  useEffect(() => {
    fetchQuote();
    return () => {};
  }, []);

  return (
    <FlexGrid {...flexGridStyle}>
      <FlexGridItem {...narrowItemProps}></FlexGridItem>
      <FlexGridItem {...mainItemProps}>
        <Card thumbnail={IMAGE} overrides={cardOverrides}>
          <StyledBody>
            <div style={{ boxSizing: "inherit" }}>
              <span
                style={{
                  fontSize: "2.5rem",
                  boxSizing: "inherit",
                }}
              >
                Sonal
              </span>
              <ParagraphSmall>
                {
                  "Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus."
                }
              </ParagraphSmall>
            </div>
          </StyledBody>
        </Card>
        {isLoading ? (
          <Content centered={true}>
            <LoadingComponent>
              <Quote ref={ref}></Quote>
            </LoadingComponent>
          </Content>
        ) : (
          <DashBoard></DashBoard>
        )}
      </FlexGridItem>
      <FlexGridItem {...narrowItemProps}></FlexGridItem>
    </FlexGrid>
  );
}

export default Page;
