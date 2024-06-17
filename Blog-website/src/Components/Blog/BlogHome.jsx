import React from "react"


const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Shelly Jones",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qrcode.png",
      cover: "/images/blog5.jpg",
    },
  ]
  return (
    <>
      <div className="flex h-screen">
        <div className='left-content bg-[url("/images/blog5.jpg")] bg-cover bg-center w-[50%]'>
          {data.map((value) => {
            return (
              <div className="ml-10 mt-4">
                <div className="bg-white w-[60px] h-[60px] text-center ml-2 pt-4 mt-10 text-black text-4xl font-bold">
                  <h1 >M</h1>
                  </div>
                <div className=''>
                 
                </div>
                <div className="flex relative h-[75vh]">
                <div className="mt-64 text-white w-[40%] ">
                  <h1 className="text-7xl font-semibold">{value.titleOne}</h1>
                  <p className=" text-lg mt-3 ">{value.paraOne}</p>
                  <span className= " text-red-700 text-lg ">{value.name}</span>
                </div>
                <div className="text-white absolute bottom-0 right-0 mr-10 w-[40%] text-end">
                  <h1 className="text-7xl font-semibold">{value.titletwo}</h1>
                  <p className=" text-lg mt-3 font-semibold">{value.paraTwo}</p>
                  <p className="text-red-700 text-lg">{value.subTitle}</p>
                </div>
                </div>
                <div>
                  <img src={value.qrCode} alt='' />
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-content'>
          
        </div>
      </div>
    </>
  )
}

export default BlogHome