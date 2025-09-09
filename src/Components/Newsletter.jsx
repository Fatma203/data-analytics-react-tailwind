export default function Newsletter(){
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
               <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                 <p>Sign up to our newsletter and stay up to date.</p>
               </div>
               <div className="my-4">
                   <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                      <input className="p-3 mr-4 flex w-full rounded-md text-black bg-white" type="email" placeholder="Enter Email"/>
                      <button className=" bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">Notify Me</button>
                   </div>
               </div>
            </div>
        </div>
    )
}