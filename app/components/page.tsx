import "@/public/style/hero1.css"
import Carousel from "@/components/casousel/Carousel"
export default function page(){
    return <div className="mr-4 leading-7">
     <h1 className="text-white text-4xl relative top-48 ml-8">Self Care </h1>
     <h1 className="text-white text-4xl relative top-48  ml-8">Products Just A</h1>
     <h1 className="text-blue-300 text-4xl relative top-48  ml-8">Click Away</h1>
     <p className="text-white relative top-48  ml-8 lg:w-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae autem earum dolor fugiat. Nam aperiam, iure odio rem accusantium consequatur .</p>
      <div className="relative top-60 ml-3">
        <Carousel/>
      </div>
      <button className="relative top-64 ml-8 rounded bg-blue-600 text-white h-10 w-60 hover:bg-blue-800">Buy Latest Collection</button>
     
        </div>
}