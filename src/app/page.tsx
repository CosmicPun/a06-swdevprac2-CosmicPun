import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <div className="m-5 flex flex-row flex-wrap justify-around content-around gap-5">
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"/>
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"/>
      </div>
    </main>
  );
}
