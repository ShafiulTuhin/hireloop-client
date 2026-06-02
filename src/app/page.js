import Banner from "@/components/homepage/Banner";
import FindJob from "@/components/homepage/FindJob";
import NextRole from "@/components/homepage/NextRole";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FindJob />
      <Banner />
      <NextRole />
    </div>
  );
}
