import image from '../../pages/blog/img/image.png';
import image1 from '../../pages/blog/img/image copy.png';
import pic1 from '../../pages/blog/img/pic-1.png';
import pic2 from '../../pages/blog/img/pic-2.png';
import pic3 from '../../pages/blog/img/pic-3.png';
import pic4 from '../../pages/blog/img/pic-4.png';
import pic5 from '../../pages/blog/img/pic-5.png';
import pic6 from '../../pages/blog/img/pic.png';

export default function Blog() {
  let objProduct = [
    { avatar: pic1, title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?', desc: 'Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida...' },
    { avatar: pic2, title: 'How to Evaluate and Compare Social Media Tools Today.', desc: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..' },
    { avatar: pic3, title: 'The Best Practices to Optimize Your Website for Mobile.', desc: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...' },
    { avatar: pic4, title: '10 Seriously Underused Paid Search Strategies.', desc: 'Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis...' },
    { avatar: pic5, title: 'How to Create Content That Gets Linked and Shared.', desc: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..' },
    { avatar: pic6, title: '12 Simple Tips to Creating an Effective Ad.', desc: 'Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...' },
  ]
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

      {/* Section 1  */}
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

      {/* section 2 */}
      <div className="flex justify-center mt-20 mb-20flex-wrap-reverse">
        <div className="flex flex-wrap justify-start w-[70%] gap-6">
          {objProduct.map((elem) => {
            return (
              <div
                key={elem.id}
                className="w-full sm:w-[48%] md:w-[30%] lg:w-[35%] p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  className="w-full h-auto rounded-lg mb-4"
                  src={elem.avatar}
                  alt={elem.title}
                />
                <p className="text-xl font-semibold mt-4">{elem.title}</p>
                <p className="text-gray-600 mt-2">{elem.desc}</p>
                <p className="text-purple-600 mt-4 cursor-pointer hover:text-purple-800">
                  Read more →
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg w-[22%] h-[1050px] p-10">
  <h1 className="text-2xl font-semibold text-gray-800 mb-6">Blog Categories</h1>
  <ul className="space-y-4">
    <li className="cursor-pointer hover:text-purple-600">All</li>
    <li className="cursor-pointer hover:text-purple-600">Media & Press</li>
    <li className="cursor-pointer hover:text-purple-600">Ad Tips</li>
    <li className="cursor-pointer hover:text-purple-600">Marketing</li>
    <li className="cursor-pointer hover:text-purple-600">SEO</li>
    <li className="cursor-pointer hover:text-purple-600">Paid Search</li>
  </ul>

  <h1 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Now Trending</h1>

  <div className="flex flex-wrap gap-4">
    {objProduct.slice(0, 3).map((elem) => {
      return (
        <div
          key={elem.id}
          className="w-[48%] sm:w-[100%] md:w-[48%] lg:w-[100%] p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl flex flex-wrap justify-between h-[200px] overflow-hidden"
        >
          <img
            className="w-full h-[120px] object-cover rounded-lg mb-4"
            src={elem.avatar}
            alt={elem.title || "Product image"}
          />
          <p className="text-xl font-semibold text-gray-800 truncate">{elem.title}</p>
          <a
            href={elem.link || '#'}
            className="text-purple-600 mt-4 cursor-pointer hover:underline"
          >
            Read more →
          </a>
        </div>
      );
    })}
  </div>
</div>

      </div>

      <div className="mt-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-8">Leave a Comment</h2>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col sm:w-1/2 pr-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border-2 border-gray-300 rounded-lg mb-4"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="sm:w-1/2">
              <textarea
                placeholder="Your Comment"
                className="p-3 border-2 border-gray-300 rounded-lg w-full h-40"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
