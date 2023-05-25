import React from "react";
import { ParagraphXSmall } from "baseui/typography";
import { ThemeProvider, LightTheme } from "baseui";
import { Card } from "baseui/card";
import { projectCardOverrides } from "../overrides/projectCardOverrides";
import { Tag, KIND, VARIANT } from "baseui/tag";
import { itemCardOverrides } from "../overrides/itemCardOverrides";
import IMAGE from "../assets/images/Product Launch 1.svg";
import Table from "./Table/Table";
import { content, itemContent } from "../data";
import getTime from "../utils/getTime";
import { getTagOverrides } from "../overrides/tagOverrides";
import { CardWrapper, HeaderWrapper, Link, SectionHeader } from "./Components";
import { Header } from "./Table/TableComponents";

function Status() {
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={LightTheme}>
        <HeaderWrapper>
          <SectionHeader>Project Status</SectionHeader>
          <Tag
            overrides={getTagOverrides()}
            closeable={false}
            kind={KIND.positive}
            variant={VARIANT.solid}
          >
            Active
          </Tag>
        </HeaderWrapper>
        <CardWrapper>
          <Card overrides={projectCardOverrides}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "row",
                boxSizing: "border-box",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <Header>Project Start Date</Header>
                {getTime()}
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <Header>Planned Duration</Header>
                35 days
              </div>
            </div>
          </Card>
          <Card overrides={projectCardOverrides}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                boxSizing: "border-box",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  flexDirection: "column",
                }}
              >
                <Header>Elapsed Time</Header>0 days
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  flexDirection: "column",
                }}
              >
                <Header>Timeline</Header>
                <Link>Click to see</Link>
              </div>
            </div>
          </Card>
        </CardWrapper>
        <HeaderWrapper styles={{ marginTop: "1.5rem" }}>
          <SectionHeader>Items Status</SectionHeader>
        </HeaderWrapper>
        <Card overrides={itemCardOverrides}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1%",
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              Current Items
            </span>
            <Tag
              overrides={getTagOverrides()}
              closeable={false}
              kind={KIND.positive}
              variant={VARIANT.solid}
            >
              Active
            </Tag>
          </div>
          <Table contents={itemContent} color={"#fff"}></Table>
        </Card>
        <CardWrapper>
          <Card overrides={projectCardOverrides}>
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              Completed Items
            </span>
            <div style={{ marginBottom: "0.5rem" }}>
              <ParagraphXSmall>
                {"Items submitted and are approved will appear here"}
              </ParagraphXSmall>
            </div>
            <img src={IMAGE} alt={"logo"}></img>
          </Card>
          <Card overrides={projectCardOverrides}>
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              Upcoming items
            </span>
            <Table contents={content} color={"#eee"}></Table>
            <span
              style={{
                textAlign: "right",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link fontSize="0.75rem">All upcoming items</Link>
            </span>
          </Card>
        </CardWrapper>
      </ThemeProvider>
    </div>
  );
}

export default Status;
