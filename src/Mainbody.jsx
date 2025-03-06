import cheifImage from "./assets/images/grocery-image.png";
const Mainbody = () => {
  return (
    <div>
      <div className=" ml-28 flex h-screen">
        <div className="text-white mt-40">
          <p className="text-6xl font-semibold mb-8 ">Super Market</p>
          <span className="text-6xl font-semibold ">
            delivery in <span className="font-thin">15 mins</span>
          </span>
          <div className="mt-4">
            <div>
              Grocify offers a wide range of products, including fresh produce,
              meats, dairy, baked goods, and non-perishable items.
            </div>
            <div className="buttons mt-5">
              <a
                href=""
                className="bg-yellow-500 font-medium hover:bg-transparent px-8 py-3 rounded-full  inline-block border border-transparent hover:border-yellow-300  duration-300"
              >
                Order now{" "}
              </a>
              <a href="" className="bg-transparent ml-6">
                Download App{" "}
              </a>
            </div>
          </div>
        </div>
        <img src={cheifImage} className="w-1/2 h-screen max-h-[90vh] " />
      </div>
    </div>
  );
};

export default Mainbody;
