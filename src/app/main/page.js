import MainNavbar from "./MainNavbar";
import heroImage from "../../assets/hero.png"; 

export default function Main() {
  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      <main
        className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <h1 className="text-4xl font-bold text-white text-center px-4 md:text-6xl lg:text-7xl">
          Bienbenide
        </h1>
      </main>
      <section className="w-full bg-blue-500 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">aaa</h2>
          <p className="text-white text-lg px-4 md:px-20 lg:px-40">
            aaa
          </p>
        </div>
      </section>
    </>
  );
}
