import image from '../../pages/blog/img/image.png'; 
import image1 from '../../pages/blog/img/image copy.png'; 

export default function Blog() {
  return (
    <>
      <header className="md:w-full h-[500px] bg-slate-950 text-white text-center">
        <div className="md:flex justify-center pt-20">
          <p>⌥ <span className="text-gray-500">Careers > </span> <span>Blog at Createx Agency</span></p>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl pt-10">Blog</h1>
          <p className="pt-10 text-gray-400 text-sm sm:text-base lg:text-lg">
            We’re looking for extraordinary talents! If you're passionate about SEO and digital marketing, <br /> we want to hear from you.
          </p>
        </div>
        <div>
          <input placeholder="Search the blog" className="w-[300px] h-[40px] bg-slate-500" type="text" />
          <button className="bg-purple-600 text-white py-1.5 px-6 text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 mt-10">
            Search
          </button>
        </div>
      </header>

      {/* Section 1 - Blog post preview */}
      <div className="flex justify-center gap-8 pt-12">
        <div className="w-[30%] text-justify">
          <img src={image} alt="How to Maximize Your ROI" className="w-full h-auto object-cover rounded-lg" />
          <p className="mt-4">How to Maximize Your ROI Through Scientific SEM?</p><br />
          <p className="mt-2">Read more <span className="text-purple-800">--></span></p>
        </div>
        
        <div className="w-[30%] text-justify">
          <img className="w-full h-auto object-cover rounded-lg" src={image1} alt="The Basics of SEO" />
          <p className="mt-4">The Basics of Blogging Search Engine Optimization.</p><br />
          <p className="mt-2">Read more <span className="text-purple-800">--></span></p>
        </div>
      </div>
    </>
  );
}
