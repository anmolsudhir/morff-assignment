import React from "react";
import { ThemeProvider, LightTheme } from "baseui";
import { Card } from "baseui/card";
import { projectCardOverrides } from "../overrides/projectCardOverrides";
import Table from "./Table/Table";
import { invoiceContent, paymentContent } from "../data";
import { HeaderWrapper } from "./Components";

function Payment() {
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={LightTheme}>
        <HeaderWrapper>
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Payments and Disbursement Notes
          </span>
        </HeaderWrapper>
        <Card overrides={projectCardOverrides}>
          <Table contents={paymentContent}></Table>
        </Card>
        <HeaderWrapper styles={{ marginTop: "1.5rem" }}>
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Invoices
          </span>
        </HeaderWrapper>
        <span
          style={{ fontSize: "0.75rem", marginLeft: "2%", color: "#666666" }}
        >
          Proforma invoice and Invoice are sent to the client on your behalf
          automatically
        </span>
        <Card overrides={projectCardOverrides}>
          <Table contents={invoiceContent} color={"#eee"}></Table>
          <span style={{ fontSize: "0.75rem", color: "#666666" }}>
            Understand the meaning of statuses and how the payments work.{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Click here
            </span>
          </span>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default Payment;
