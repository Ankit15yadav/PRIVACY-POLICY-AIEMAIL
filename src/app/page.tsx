import PrivacyPolicy from "@/components/PrivacyPolicy";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center ">
      <PrivacyPolicy />
    </div>
  );
}
