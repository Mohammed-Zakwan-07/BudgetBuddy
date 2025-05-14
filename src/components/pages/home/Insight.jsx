import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

function Insight() {
  return (
    <section id='insight' className="mt-150 ml-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-12">Insights</h1>
      
      <div className="flex justify-center items-start gap-10 flex-wrap m-10">
        {[image1, image2, image3].map((img, i) => (
          <div 
            key={i} 
            className="w-[350px] transition-transform hover:scale-105 hover:shadow-2xl border-2 border-orange-100 rounded-3xl overflow-hidden bg-white"
          >
            <img 
              src={img} 
              alt={`Insight ${i + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Insight;
