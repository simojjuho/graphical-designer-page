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
        <div>
          <img className="h-36 max-w-36" src="./src/assets/desktop-mobile-icon.svg" alt="Desktop / mobile icon representing a service offered in this business" />
        </div>
        <div>
          <img className="h-36 max-w-36" src="./src/assets/calendar-line-icon.svg" alt="" />
        </div>
        <div>
          <img className="h-36 max-w-36" src="./src/assets/rocket-launch-line-icon.svg" alt="" />
        </div>
        <div>
          <img className="h-36 max-w-36" src="./src/assets/shopping-cart-icon.svg" alt="" />
        </div>
        <div>
          <img className="h-36 max-w-36" src="./src/assets/training-board-icon.svg" alt="" />
        </div>
        <div>
          <img className="h-36 max-w-36" src="./src/assets/world-globe-line-icon.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Services
