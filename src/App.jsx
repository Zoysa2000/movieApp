
import './App.css'
import MovieApp from "./components/Movielist.jsx";
import Upcoming from "./components/Upcoming.jsx";

function App() {


  return (
      <>
          {/* background image */}
          <div
              className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/14db4679-e946-46ab-a96a-9285864a1422/LK-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg')] md:h-[95vh] h-[70vh] bg-cover bg-center relative">
              <div
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"></div>
              <div className='relative z-10 flex items-center justify-between px-8 pt-8 '>
                  <svg viewBox="0 0 111 30" data-uia="netflix-logo"
                       className="text-[#e50914] fill-current h-[24px] md:h-[36px]" aria-hidden="true"
                       focusable="false">
                      <g id="netflix-logo">
                          <path
                              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                              id="Fill-14"></path>
                      </g>
                  </svg>
                  <a href="#"
                     className="bg-[#e50914] py-[0.25rem] px-[0.5rem] md:px-[17px] md:py-[7px] rounded-[3px] text-white text-[0.9rem]">Sign
                      In</a>
              </div>
              <div
                  className='relative z-10 flex flex-col  text-center px-5 justify-center items-center w-full md:w-[85%] max-w-[800px] text-white h-full mx-auto gap-2'>
                  <h1 className="max-w-screen-sm title">Unlimited movies, TV shows, and more.</h1>
                  <p className="subtitle md:py-[12px]">Watch anywhere. Cancel anytime.</p>
                  <p className="md:text-[1.2rem] text-[18px] font-light">Ready to watch? Enter your email to create or
                      restart your membership.</p>
                  <div className="flex flex-col items-center justify-center w-full mt-3 md:flex-row md:items-stretch">
                      {/* streach hight similar to all items in the div */}
                      <input type="text" placeholder="Email address"
                             className="md:w-[60%]  w-full px-[10px] py-2 md:py-4 bg-white placeholder:text-sm"></input>
                      <button className="red-btn ">
                          <span>Find  Movies</span>
                          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 6 12"
                               xmlns="http://www.w3.org/2000/svg">
                              <desc>chevron</desc>
                              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
          {/* second content*/}
          <div className='border'>
              <div
                  className="flex md:flex-row flex-col text-white justify-between py-10 md:gap-[30px] max-w-[1300px] px-5 mx-auto items-center ">
                  <div className="md:w-[52%]">
                      <h1 className="pb-3 title">Enjoy on your Movies.</h1>
                      <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                          players, and more.</p>
                  </div>
                  <div className="relative md:w-[48%] w-full">
                      <img
                          className="w-full h-full"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                          alt="TV Image"
                      />
                      <video
                          className="absolute top-[48%] max-h-[74%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                          data-uia="our-story-card-video"
                          autoPlay
                          playsInline
                          muted
                          loop
                      >
                          <source
                              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                              type="video/mp4"
                          />
                      </video>
                  </div>
              </div>
          </div>

          {/*Movie List*/}
          <div className="border">
              <div className="mx-auto text-center  max-w-[1300px]  py-10 px-5 text-white">
                  <h1 className=" title ">Watch the Popular Movies</h1>
                  <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                      players, and more.</p>
              </div>
              <MovieApp/>

          </div>

          {/*third content*/}
          <div className="border">
              <div
                  className='flex flex-col  justify-center text-white md:flex-row max-w-[1300px] md:gap-[100px] items-center mx-auto py-16 md:py-0 md:pb-[40px] px-5'>
                  <div className="relative w-full md:w-[48%]">
                      <img className="w-full h-full"
                           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                           alt=""/>
                      <div
                          className='flex flex-row items-center justify-between  w-[70%] md:w-[60%] absolute bg-black border-2 border-gray-700 rounded-xl md:py-[0.5rem] py-[0.25rem] px-[0.5rem] md:px-[0.75rem] left-[50%] bottom-[4%] -translate-x-1/2 '>
                          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                               alt="" className="md:h-[4.5rem] h-[3rem]"/>
                          <div className="text-left">
                              <div className="md:text-base text-[0.9rem]">Stranger Things</div>
                              <div className="md:text-base text-[0.75rem] text-[#0071eb]">Downloading...</div>
                          </div>
                          <img className="h-[3rem] w-[3rem]"
                               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                               alt=""></img>
                      </div>
                  </div>

                  <div className="md:w-[52%] w-full text-center md:text-left mt-5 md:mt-0">
                      <h1 className="pb-3 title">Download your shows to watch offline.</h1>
                      <p className="subtitle">Save your favorites easily and always have something to watch.</p>
                  </div>

              </div>
          </div>

          <div className="border">
              <div className="mx-auto text-center  max-w-[1300px]  py-10 px-5 text-white ">
                  <h1 className=" title ">Find the Upcoming Movies</h1>
                  <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                      players, and more.</p>
              </div>
              <Upcoming/>

          </div>
          <div className=" mb-10">
          </div>

      </>
  )
}

export default App
