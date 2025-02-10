const Contact = () => {
  return (
    <section id='contact' className='min-h-fit text-on-dark px-28 pt-24 pb-40 bg-dark flex flex-col items-center'>
       <h2
        className="flex max-w-fit items-end justify-center relative mb-24 uppercase font-bold font-info text-center
        after:absolute after:h-0.5 after:w-20 after-border-solid 
        after:border-2 after:top-20
        "
      >Contact</h2>
      <p className="text-center">
        <i>phone</i> 012-3456789 <br />
        <i>email</i> name@domain.com <br />
        <i>address</i> Road 123. Town 
      </p>
      <div>
        Socieal media logos
      </div>
    </section>
  )
}

export default Contact
