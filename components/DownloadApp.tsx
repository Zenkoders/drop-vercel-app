"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function DownloadApp() {
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

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  //     <h1 className="text-2xl font-semibold mb-6">
  //       Download Drop Connect, Play, Repeat.
  //     </h1>

  //     <div>
  //       {/* App Store Button */}
  //       <Link
  //         href="https://apps.apple.com/ch/app/drop-connect-play-repeat/id6739575066?l=en-GB"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           src="/appStoreButton.png" // Store locally or use an official source
  //           alt="Download on the App Store"
  //           width={180}
  //           height={60}
  //         />
  //       </Link>

  //       {/* Google Play Button */}
  //       <Link
  //         href="https://play.google.com/store/apps/details?id=com.drop.social.app&hl=en-us"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           src="/playStoreButton.png" // Store locally or use an official source
  //           alt="Get it on Google Play"
  //           width={180}
  //           height={60}
  //         />
  //       </Link>
  //     </div>
  //   </div>
  // );
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

export default DownloadApp;
