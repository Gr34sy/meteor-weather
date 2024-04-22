import Image from "next/image";

export default async function Home() {
  const lat = 10.99;
  const lon = 44.34;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEYA}&units=metric`
  );

  if(!response.ok){
    throw new Error("Failed loading data");
  }

  const data = await response.json();
  console.log(data);

  return <main className="">Hello</main>;
}
