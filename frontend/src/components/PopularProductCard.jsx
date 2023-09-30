import { star } from "../assets/icons";

const PopularProductCard = ({name, imgURL, price}) => {
  //  console.log(name, imgUrl, price);
  return (
    <div 
    className="flex flex-1 flex-col w-full max-sm:w-full shadow-md shadow-slate-300 z-10 border-2 border-slate-300"
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-center gap-2.5 ">
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
        <img src={star} alt="rating-icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">4.5</p>
      </div >

      <h3 className="mt-2 ml-8 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      
    </div>
  )
}

export default PopularProductCard