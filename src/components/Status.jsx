import React from "react";
import { ParagraphXSmall } from "baseui/typography";
import { ThemeProvider, LightTheme } from "baseui";
import { Card } from "baseui/card";
import { projectCardOverrides } from "../overrides/projectCardOverrides";
import { Tag, KIND, VARIANT } from "baseui/tag";
import { itemCardOverrides } from "../overrides/itemCardOverrides";
import IMAGE from "../assets/images/Product Launch 1.svg";
import Table from "./Table";
import { content, itemContent } from "../data";
import getTime from "../utils/getTime";
import { getTagOverrides } from "../overrides/tagOverrides";

function Status() {
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={LightTheme}>
        <div
          style={{
            marginLeft: "2%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1%",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Project Status
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
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            gap: "0.75rem",
          }}
        >
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
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ color: "#333", fontSize: "0.6rem" }}>
                  Project Start Date
                </div>
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
                <div style={{ color: "#333", fontSize: "0.6rem" }}>
                  Planned Duration
                </div>
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
                <div style={{ color: "#333", fontSize: "0.6rem" }}>
                  Elapsed Time
                </div>
                0 days
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
                <div style={{ color: "#333", fontSize: "0.6rem" }}>
                  Timeline
                </div>
                <span
                  style={{
                    textDecoration: "underline",
                    color: "#276EF1",
                    cursor: "pointer",
                  }}
                >
                  Click to see
                </span>
              </div>
            </div>
          </Card>
        </div>
        <div
          style={{
            marginLeft: "2%",
            marginTop: "1.5rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1%",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Items Status
          </span>
        </div>
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
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "auto",
            justifyContent: "center",
            boxSizing: "inherit",
            gap: "0.75rem",
          }}
        >
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
                fontSize: "0.75rem",
                textAlign: "right",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                textDecoration: "underline",
                color: "#276EF1",
                cursor: "pointer",
              }}
            >
              All upcoming items
            </span>
          </Card>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Status;
