import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import Contact from "@/pages/Contact";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { PreloadProvider, usePreload } from "@/context/PreloadContext";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence } from "motion/react";

function MainContent() {
  const { isLoading, finishLoading } = usePreload();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={finishLoading} />}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Work />} />
            <Route path="work" element={<Navigate to="/projects" replace />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PreloadProvider>
        <MainContent />
      </PreloadProvider>
    </ThemeProvider>
  );
}
