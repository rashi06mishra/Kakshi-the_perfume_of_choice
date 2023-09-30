import { FaEnvelope, FaPhone } from "react-icons/fa6"

const ContactUs = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    id="contact-us">
      <div
        className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container"
      >
        <div className="">
          <div >
            <h3 className="font-palanquin text-center text-4xl font-bold self-start">Reach <span className="text-yellow-600">us</span> at </h3>
          </div>
          
          <div className="mt-10">
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">< FaEnvelope className="display:inline" size={30} />kakshie.perfume@gmail.com</p>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"> <FaPhone size={30} /> +91 8482977257</p>

          </div>
        </div>

        {/* form  */}
        <div>
          {/* <!-- component --> */}
<form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
        First Name <span className=" text-red-600 text-bold text-[16px]">*</span>
      </label>
      <input className="appearance-none block w-full bg-gray-200  border border-yellow-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <p className="text-yellow-600 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
        Last Name<span className=" text-red-600 text-bold text-[16px]">*</span>
      </label>
      <input className="appearance-none block w-full bg-gray-200 border border-yellow-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
        E-mail<span className=" text-red-600 text-bold text-[16px]">*</span>
      </label>
      <input className="appearance-none block w-full bg-gray-200 border border-yellow-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
      {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 border border-yellow-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-yellow-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs