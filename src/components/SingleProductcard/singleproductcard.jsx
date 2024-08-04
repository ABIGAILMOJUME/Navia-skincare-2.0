import './singleproductcard.css'

const SingleProductcard = ({image,name,price}) => {
    return ( 
        <div className=" mb-8 singleproduct-image-container">
        <img src={image} alt='statecard' className="w-full h-full object-cover mb-2" />
        <div className="flex justify-between items-center">
          <h3 className="text-sm uppercase tracking-wider sp-name">{name}</h3>
          <p className=" sp-price">${price}</p>
        </div>
      </div>
     );
}
 
export default SingleProductcard;