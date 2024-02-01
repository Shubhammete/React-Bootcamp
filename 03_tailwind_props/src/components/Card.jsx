// you can pass props using object as props or anything
const Demo = (a) => {
  return (
    <div>
        {/*one way to print default but use a.name = {"some"} */}
      <h1 className="text-3xl text-red-500">{a.name || "if not passed"}</h1>
    </div>
  )
}

// passing props using object destructuring
// setting default as kunal if props are empty or not passed it will show Kunal
const Card = ({name = "Kunal"}) => {
  return (
    <>
    <Demo name = "passing data from prop object"/>
    <Demo />
    {/*template card from tailwind*/}
    <div className='p-5'>
      
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that Ive seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
            </div>
            </figcaption>
        </div>
        </figure>
    </div> 
    </>
  )
}

export default Card
