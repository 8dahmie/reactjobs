

const Hero = ({title  = 'Become a React Dev', subtitle= 'Find the perfect job that fits your skill set'}) => {
  return (

   <section className="bg-indigo-700 py-20 mb-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white"> {title} </h1>
        <p  className="my-4 text-xl text-white text-capitalize"> 
         {subtitle}
        </p>
      </div>
    </div>
   </section>
  )
}

export default Hero