import MainNavbar from "./MainNavbar";

export default function Main() {
  return (
    <>
      <div className="w-screen">
        <MainNavbar />
      </div>
      {/* Hero: Sección Roja */}
      <main className="flex flex-col items-center justify-center bg-red-500 h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold text-white">Bienvenido a MarketingLab</h1>
      </main>
      {/* Sección Azul debajo del Hero */}
      <section className="w-full bg-blue-500 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Explora nuestros Servicios</h2>
          <p className="text-white text-lg">
            Ofrecemos una amplia gama de servicios para satisfacer tus necesidades de marketing.
          </p>
        </div>
      </section>
    </>
  );
}
