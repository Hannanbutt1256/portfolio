const Contact = () => {
  return (
    <div
      id="Contact"
      className="p-2 px-7 mt-5 mx-5 h-screen font-mont bg-lightBeige text-charcoal"
    >
      <h1 className="text-center p-6 font-bold text-4xl bg-gradient-to-r from-mintGreen to-softBlue bg-clip-text text-transparent">
        Contact
      </h1>
      <div className="flex flex-col items-center justify-center mt-40 ">
        <form
          action=""
          className="flex flex-col justify-center items-center max-w-xs w-full space-y-4 p-4 bg-lightBeige "
        >
          <input
            type="text"
            placeholder="Name"
            className="border border-mintGreen rounded-2xl w-full p-2 hover:border-2 hover:border-softBlue focus:outline-softBlue"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-mintGreen rounded-2xl w-full p-2 hover:border-2 hover:border-softBlue focus:outline-softBlue "
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="border border-mintGreen rounded-2xl w-full p-2 hover:border-2 hover:border-softBlue focus:outline-softBlue "
          ></textarea>
        </form>
        <button className="px-5 py-3 mt-2 rounded-3xl  font-medium bg-mintGreen hover:bg-gradient-to-r hover:from-mintGreen hover:to-softBlue hover:text-lightBeige transition-transform duration-300 ease-in text-center">
          Submit Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
