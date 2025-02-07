import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section id='services' className='min-h-fit text-white px-28 py-24 bg-dark flex flex-col items-center'>
      <h2
        className="flex text-[#AAAAAA] max-w-fit items-end justify-center relative mb-24 uppercase font-bold font-info text-center
        after:absolute after:h-0.5 after:w-20 after-border-solid 
        after:border-2 after:top-20
        "
      >Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
        <ServiceCard
          imagePath="./src/assets/desktop-mobile-icon.svg"
          imageAltText="Desktop / mobile icon representing a service offered in this business"
          cardText="Duis pharetra eleifend sapien, a aliquet arcu egestas vel. Quisque ac eros sit amet ipsum maximus rhoncus. In mi dolor, elementum ac nunc non, aliquet aliquam nulla."
        />
        <ServiceCard 
          imagePath="./src/assets/calendar-line-icon.svg"
          imageAltText="Calendar icon representing a type of service offered by this business"
          cardText="Curabitur sed convallis sem. Integer consequat id tellus sit amet porttitor. Cras mauris arcu, scelerisque vitae neque quis, aliquet interdum nunc. Donec gravida lectus id placerat varius"
        />
        <ServiceCard
          imagePath="./src/assets/rocket-launch-line-icon.svg"
          imageAltText=""
          cardText="Aliquam porttitor nunc eros. Nam eget ante ut odio consectetur mollis sed id massa. Nunc viverra volutpat massa quis tincidunt. Vivamus tincidunt sem eu gravida blandit."
        />
        <ServiceCard
          imagePath="./src/assets/shopping-cart-icon.svg"
          imageAltText=""
          cardText="enean viverra ligula a posuere vulputate. Morbi nec egestas tortor. Morbi tincidunt placerat justo, at dictum sapien. Quisque ut tempus ante. Etiam iaculis sodales tellus vitae suscipit."
        />
        <ServiceCard
          imagePath="./src/assets/training-board-icon.svg"
          imageAltText=""
          cardText="In magna nulla, faucibus vel mollis id, convallis porta tellus. Nulla sed rhoncus nunc, sit amet blandit orci. Pellentesque varius a est ut blandit. Nulla tincidunt augue nisl, non luctus mauris hendrerit ac."
        />
        <ServiceCard
          imagePath="./src/assets/world-globe-line-icon.svg"
          imageAltText=""
          cardText="Curabitur justo diam, suscipit quis odio quis, varius mattis eros. In a dui quis erat semper convallis. Curabitur consequat vestibulum laoreet. Cras in lectus tincidunt, sollicitudin sem a, finibus quam."
        />
      </div>
    </section>
  )
}

export default Services
