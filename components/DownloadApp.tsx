import React from "react";
import Image from "next/image";
import Link from "next/link";

function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Download Drop Connect, Play, Repeat.
      </h1>

      <div>
        {/* App Store Button */}
        <Link
          href="https://apps.apple.com/ch/app/drop-connect-play-repeat/id6739575066?l=en-GB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/appStoreButton.png" // Store locally or use an official source
            alt="Download on the App Store"
            width={180}
            height={60}
          />
        </Link>

        {/* Google Play Button */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.drop.social.app&hl=en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/playStoreButton.png" // Store locally or use an official source
            alt="Get it on Google Play"
            width={180}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
}

export default DownloadApp;
