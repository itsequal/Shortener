// `app/page.tsx` is the UI for the `/` URL
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 h-screen">
              <div>
                  <section className=" text-gray-600 font-mclaren h-3/4 w-5/6 flex items-center ps-40">
                        <div className="whitespace-pre-line">
                          <article className="text-wrap">
                              <h1 className="text-4xl text-black font-thin pb-5">Shorten those complicated URLs</h1>
                              <p className="text-2xl pb-5">Use our paimon URL shortener and transform those complex URLs into something  better.</p>
                              <button type="submit" className="text-white bg-yoimiya font-mclaren py-2 px-8 rounded-xl">Get Started!</button>
                          </article>
                        </div>
                  </section>
              </div>
              
              <div>
                <section className=" text-gray-600 font-mclaren h-3/4 flex items-center ps-28">
                    <Image 
                      src="/img/yoimiya_title.png"
                      width={300}
                      height={300}
                      alt="Yoimiya main screen"
                    />
                    <p className="bubble thought font-mclaren">You will love this shortener!</p>
                </section>
              </div>
      </div>

      <div className="h-screen bg-[#F8F8F8]">
          
          <section className=" text-gray-600 font-mclaren flex items-center justify-center">
                <h1>
                      Sign up and start to shorten your URLs!
                </h1>
          </section>

          <section className="text-gray-600 font-mclaren flex items-center justify-center">
                <div className="border-2 rounded-md border-yoimiya size-1/2">
                    <h1>Shorten that link!</h1>
                    <input type="text" className="border border-neutral-950 text-sm rounded-sm w-full p-2" placeholder="Example: https://www.examplelink.com"/>
                    <button type="submit" className="text-white bg-yoimiya font-mclaren py-2 px-3 rounded-md">Shorten URL</button>
                </div>
          </section>
      </div>



    </div>
    

  );
}
