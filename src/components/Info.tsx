const Info = () => {
  return (
    <section id='info' className='h-fit flex flex-col items-center p-36 bg-yellow-accent relative'>
      <h2
        className="flex max-w-fit items-end justify-center relative mb-24 uppercase font-bold font-info text-center
        after:absolute after:h-0.5 after:w-20 after-border-solid 
        after:border-2 after:top-20
        "
      >info</h2>
      <article className="leading-9 font-light text-center flex lg:flex-row flex-col gap-10">
        <p className="text-2xl lg:text-right ">Sed at ante in diam pharetra commodo. Fusce vulputate, orci eu viverra molestie, dui nunc convallis enim, ac vehicula nunc leo id elit. Phasellus fermentum lacus tincidunt, congue libero tempus, placerat eros. Duis auctor nisi vitae ex convallis, sed venenatis augue pharetra.</p>
        <p className="lg:text-left ">Integer venenatis dui arcu, vulputate maximus libero tincidunt nec. Donec elementum efficitur bibendum. Fusce diam ante, venenatis sit amet neque ac, cursus eleifend justo. Nam faucibus scelerisque dolor vel maximus. Mauris molestie aliquam eros, nec molestie urna laoreet nec. Aliquam sapien nunc, vehicula sit amet accumsan bibendum, molestie eu sem. Nulla ultrices neque vel scelerisque faucibus.</p>
        <p className="lg:text-left ">Vestibulum pulvinar accumsan libero sit amet cursus. Phasellus aliquam in sapien ut ullamcorper. Etiam hendrerit id turpis sed interdum. Proin feugiat purus non neque consectetur congue. Nullam dapibus iaculis leo. Mauris blandit tellus ligula. In nec velit sapien. Maecenas mi purus, pretium non augue nec, cursus pretium diam. Duis tempus pulvinar rutrum. Nullam vestibulum tortor sed tellus ullamcorper ultrices.</p>
      </article>
    </section>
  )
}

export default Info
