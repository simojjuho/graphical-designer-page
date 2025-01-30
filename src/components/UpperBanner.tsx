const UpperBanner = () => {
  return (
    <div id="home" className="w-full min-h-screen 
      bg-[url('./assets/water-drop.jpg')] bg-no-repeat bg-cover bg-center bg-fixed
      flex flex-col items-center justify-center gap-5 text-center">
        <h2 id="banner-heading" className="font-banner-heading italic text-8xl text-[#efdf75]">Moi!</h2>
        <p id="banner-intro" className="xl:w-2xl text-2xl">Tähän tulee lyhyt <strong>esittely</strong>, joka luo asiakkaalle ensimmäisen mielikuvan sinusta graafisena suunnittelijana.</p>
    </div>
  )
}

export default UpperBanner
