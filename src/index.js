import React from "react";
import Router from "./router";
import ThemeProvider from "./theme";

export default function AppRouter() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
