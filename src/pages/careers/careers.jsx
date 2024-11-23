export default function Careers() {
  const jobListings = [
    {
      title: "Digital Marketing Strategist",
      description: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu.",
    },
    {
      title: "Sales Executive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque ac lorem scelerisque cursus.",
    },
    {
      title: "Social Media Content Manager",
      description: "Aliquam erat volutpat. Phasellus sit amet accumsan nulla. Nulla facilisi. Sed sollicitudin, urna at convallis vehicula.",
    },
    {
      title: "Digital Marketing Account Manager",
      description: "Aenean nec lorem et leo gravida sodales. Ut vehicula libero ut nisl volutpat, eu cursus elit suscipit.",
    },
  ];

  const requirements = [
    "Vitae luctus et arcu vitae eu tellus orci.",
    "Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit.",
    "Purus cursus nascetur leo diam.",
    "Nascetur id turpis facilisis faucibus vel, iaculis etiam.",
  ];

  return (
    <>
      <header className="md:w-full h-[500px] bg-slate-950 text-white text-center">
        <div className="md:flex justify-center pt-20">
          <p>⌥ <span className="text-gray-500">Careers > </span> <span>Careers at Createx Agency</span></p>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl pt-10">Careers at Createx Agency</h1>
          <p className="pt-10 text-gray-400 text-sm sm:text-base lg:text-lg">
            We’re looking for extraordinary talents! If you're passionate about SEO and digital marketing, <br /> we want to hear from you.
          </p>
        </div>
        <div className="flex justify-center pt-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/images/email-icon.png" alt="Email" className="w-6 h-6" />
              <div>
                <p className="text-xs text-gray-500">Talk to us</p>
                <p className="text-xl">hello@createx.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/images/phone-icon.png" alt="Phone" className="w-6 h-6" />
              <div>
                <p className="text-xs text-gray-500">Call us</p>
                <p className="text-xl">(405) 555-0128</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 max-w-6xl mx-auto px-6">
        {/* Job listings */}
        {jobListings.map((job, index) => (
          <div className="flex justify-between items-center py-4 flex-col sm:flex-row" key={index}>
            <div className="w-full sm:w-auto">
              <h2 className="flex items-center text-2xl">
                <span className="text-blue-500 text-xl">-</span> {job.title}
              </h2>
              <p className="w-full sm:w-[600px] pt-5">{job.description}</p>
            </div>
            <button className="mt-4 sm:mt-0 border-solid border-2 border-purple-600 py-3 px-6 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
              Apply now
            </button>
          </div>
        ))}

        {/* Requirements Section */}
        <div className="mt-20">
          <p className="text-gray-500">Requirements:</p>
          <ul className="list-disc pl-5 text-gray-500">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>


      {/* Comments Section */}
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
