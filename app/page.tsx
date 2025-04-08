"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.dropapp.info/"; // Replace with your target domain
    }, 200); // 200 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.loader}></div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb", // light background
  },
  loader: {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #3b82f6", // blue
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    animation: "spin 1s linear infinite",
  },
};

// Add this global style in your app/globals.css or via <style> tag in layout (if not using Tailwind):
// Otherwise, use Emotion or styled-components for inline keyframes

// If you are not using global CSS, here's how to inject it inline too:
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
