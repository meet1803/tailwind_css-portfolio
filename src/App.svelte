<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Typewriter from "svelte-typewriter";
  import Transition from "svelte-class-transition";
</script>

<main
  class="text-white font-Montserrat scroll-behavior:smooth bg-slate-900 "
>
  <header class="py-4" id="home">
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <div
        class="container mx-auto max-w-8xl flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0"
          href="/devfolio"
        >
          <span class="ml-1 font-bold text-xl">Devfolio</span>
        </a>

        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a
            href="#home"
            class="font-bold mr-5 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Home</a
          >

          <a
            href="#about"
            class="font-bold mr-5 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >About Me</a
          >

          <a
            href="#portfolio"
            class="font-bold mr-5 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Portfolio</a
          >

          <a
            href="#Experience"
            class="font-bold mr-5 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Experience</a
          >
        </nav>

        <button
          class="btn btn-primary px-6 py-2 bg-base font-bold mt-4 md:mt-0"
          type="button"
        >
        <a href="#hireme ">Hire me</a>
        </button>
      </div>
    </Transition>

    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <div
        class="container mx-auto md:space-x-10 md:grid grid-cols-3 justify-center md:py-36"
      >
        <div class="grid justify-center items-center order-1 col-span-1">
          <img
            class="rounded-full h-40 w-40 lg:h-80 lg:w-80"
            src="src\images\img-1.jpeg"
            alt=""
          />
        </div>

        <div class=" mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1
            class="text-4xl text-gray-800 text-center md:text-left mb-6 font-bold"
          >
            <span class="block xl:inline text-gray-50">
              Hi, I'm Mohit Patel.
            </span>

            <span class="block xl:inline text-indigo-500">
              Creative Web

              <div
                class="typewriter-container cursor svelte-1tebko8"
                style="--cursor-color: black"
              >
                <Typewriter>
                  <span class="typing">Designer.</span>
                  <span class="typing">Devloper.</span>
                </Typewriter>
              </div>
            </span>
          </h1>

          <p class="text-gray-400 font-medium text-center text-xl md:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <button
            class="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800"
          >
            <a href="src\resume\MohitPatel.pdf" download>Download Resume</a>
          </button>
        </div>
      </div>
    </Transition>
  </header>

  <!-- about me  -->
  <section class="bg-gray-800 pattern py-20" id="about">
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <div class="max-w-2xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">About Me</h2>
        <p class="text-gray-400 mt-4 leading-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius soluta
          facere nesciunt ipsum officiis debitis, doloremque a quidem dolores
          maxime omnis consequatur, culpa accusamus esse beatae! Nisi incidunt
          ea distinctio! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa voluptates non nesciunt est adipisci sit.
        </p>
      </div>
    </Transition>
  </section>

  <div
    class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    id="portfolio"
  >
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <section
        class="w-full text-center transition transform ease-out duration-1000 opacity-100 translate-x-0"
      >
        <h2 class="secondary-title font-bold text-4xl md:text-left mb-6">
          Portfolio
        </h2>
        <p
          class="section-paragraph text-gray-400 font-normal mx-auto md:text-left mt-5 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni
          quas illo, fugit eum ullam ipsa quod excepturi nulla. Commodi
          consequatur temporibus corrupti cumque, aut tempore tenetur
          praesentium labore atque! Commodi consequatur temporibus corrupti.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-6">
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\summer sale.png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>

          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\category.png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>

          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\Screenshot (33).png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>

          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\Screenshot (34).png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>

          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\Screenshot (36).png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>

          <div class="img-wrapper relative overflow-hidden">
            <img
              src="src\images\Screenshot (35).png"
              class="w-full bg-nav object-cover h-36 lg:h-72 hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>
        </div>
      </section>
    </Transition>
  </div>

  <!-- Clients -->

  <div
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
  >
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <section
        class="w-full transition transform ease-out duration-1000 opacity-100 translate-x-0"
      >
        <h2
          id="clients"
          class="secondary-title md:text-left mb-6 text-white font-bold text-4xl"
        >
          Experience
        </h2>
        <p class="text-gray-400 md:text-left leading-normal section-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni
          quas illo, fugit eum ullam ipsa quod excepturi nulla. Commodi
          consequatur temporibus corrupti cumque, aut tempore tenetur
          praesentium labore atque! Commodi consequatur temporibus corrupti
          cumque, aut tempore tenetur praesentium labore atque!
        </p>

        <div class="space-y-12 my-16">
          <div
            class="w-full border border-nav p-16  lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out"
          >
            <div class="mb-6 lg:mb-0">
              <a href="http://raventechnolabs.com/">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   version="1.0" 
                   width="200" 
                   height="200" 
                   viewBox="0 0 200 200"
                   fill="none" 
                   preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
                <path d="M390 1695 c0 -7 30 -67 37 -75 3 -3 129 -7 281 -10 l277 -6 78 -36 c101 -48 173 -120 223 -225 34 -70 38 -87 42 -179 5 -109 -6 -159 -55 -258 -26 -51 -126 -160 -143 -154 -11 3 -101 78 -295 243 -71 61 -142 119 -156 128 -26 17 -27 17 -33 -5 -14 -55 -11 -60 247 -275 138 -116 331 -278 427 -359 282 -237 259 -220 277 -201 32 32 8 62 -187 227 -105 89 -190 164 -190 169 0 4 24 33 54 65 58 63 104 147 131 241 21 71 16 233 -9 305 -55 157 -158 281 -287 344 -116 57 -178 66 -466 66 -139 0 -253 -2 -253 -5z"
                fill="white"
                />
                <path d="M450 1575 c0 -17 32 -64 47 -71 10 -4 115 -9 233 -11 239 -3 268 -9 354 -71 52 -38 105 -112 126 -177 7 -22 13 -74 13 -116 0 -81 -21 -144 -69 -206 l-26 -34 -56 48 c-221 184 -253 215 -241 229 6 7 43 34 81 60 38 25 67 48 64 51 -3 4 -1 12 5 20 10 11 -25 13 -203 13 l-215 0 -26 -58 c-60 -133 -73 -268 -38 -404 46 -179 152 -313 321 -406 64 -35 203 -72 272 -72 41 0 54 -6 101 -44 71 -58 88 -66 137 -66 31 0 41 4 38 14 -2 8 -49 53 -106 100 -100 84 -104 86 -155 86 -233 1 -439 145 -509 358 -38 115 -28 293 20 376 16 27 24 31 67 34 l50 2 -34 -28 -34 -29 99 -84 c276 -236 347 -295 365 -301 37 -14 120 89 154 192 24 70 25 196 2 268 -35 114 -130 232 -223 280 -90 46 -135 52 -381 52 -128 0 -233 -2 -233 -5z"
                fill="white"
                />
                <path d="M1227 477 l-28 -12 38 -35 c21 -20 71 -65 112 -100 67 -58 78 -64 120 -64 30 -1 46 3 46 11 0 14 -234 213 -250 213 -5 -1 -23 -6 -38 -13z"
                  fill="white"
                />
                </g>
                </svg>
              </a>
            </div>
            <div
              class="flex flex-wrap justify-center text-center lg:text-left lg:block"
            >
              <h3 class="text-3xl text-white font-extrabold"> Raven Technolabs </h3>
              <p class="italic">May-2022  -  July-2022</p>

              <div
                class="mt-6 mb-8 flex flex-wrap w-full lg:w-auto justify-center lg:justify-start gap-3"
              >
                <div class="badge">Front-end Development</div>
                <div class="badge">React Js</div>

                <p class="text-secondary leading-normal mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  alias voluptatibus rerum et perferendis incidunt veniam
                  consequuntur assumenda recusandae sint, officia quas nisi
                  natus? Explicabo molestias tenetur voluptatibus officia
                  sunt.officia quas nisi natus? Explicabo molestias tenetur
                  voluptatibus officia sunt.Explicabo.
                </p>

                <a
                  href="#Learn More"
                  class="font-extrabold text-gray-50 items-center mt-8 inline-flex"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg
                  >
                </a>
              </div>
            </div>
          </div>

          <div
            class="p-16 lg:px-32 lg:py-20 lg:space-x-36 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap w-full border border-nav hover:scale-110 transition duration-300 ease-in-out"
          >
            <div class="mb-6 lg:mb-0">

              <a href="https://stacknyu.com/">
                  <img 
                  src="https://stacknyu.com/_app/immutable/assets/logo-9e05b2e9.png"
                  class="lg:scale-200 items-center justify-center mt-36 "
                  alt="">
              </a>
            </div>
            <div
              class="justify-center flex flex-wrap text-center lg:text-left lg:block"
            >
              <h3 class="text-3xl text-white font-extrabold">stacknyu</h3>
              <p class="italic">May-2023  -  Present</p>

              <div
                class="mt-6 mb-8 flex flex-wrap w-full lg:w-auto justify-center lg:justify-start gap-3"
              >
                <div class="badge">Web Development</div>
                <div class="badge">Svelte</div>
                <div class="badge">Tailwind CSS</div>

                <p class="text-secondary leading-normal mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  alias voluptatibus rerum et perferendis incidunt veniam
                  consequuntur assumenda recusandae sint, officia quas nisi
                  natus? Explicabo molestias tenetur voluptatibus officia
                  sunt.officia quas nisi natus? Explicabo molestias tenetur
                  voluptatibus officia sunt.Explicabo.
                </p>

                <a
                  href="#Learn More"
                  class="font-extrabold text-gray-50 items-center mt-8 inline-flex"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>

  <div
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
  >
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <section
        class="w-full transition transform ease-out duration-1000 opacity-100 translate-x-0"
        
      >
        <h2
          class="secondary-title md:text-left mb-6 text-gray-50 font-bold text-4xl"
          id="Hireme"
        >
          Hire me
        </h2>
        <p class="text-gray-400 md:text-left leading-normal section-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div class="w-full grid gap-8 lg:grid-cols-2 lg:gap-32 mt-24">
          <div class="space-y-12">
            <div>
              <label
                for="message"
                class="text-white mb-6 block font-extrabold text-xl"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                class="px-4 py-4 text-black border rounded-xl bg-white bg-input w-full"
              />
            </div>

            <div>
              <label
                for="message"
                class="text-white mb-6 block font-extrabold text-xl"
              >
                Email
              </label>

              <input
                type="text"
                id="name"
                class="px-4 py-4 text-black border rounded-xl bg-white bg-input w-full"
              />
            </div>

            <div>
              <label
                for="message"
                class="text-white mb-6 block font-extrabold text-xl "
              >
                Message
              </label>

              <input
                type="text"
                id="name"
                class="px-24 py-24 text-black border rounded-xl bg-white bg-input w-full"
              />
            </div>

            <button
              class="btn btn-primary px-6 py-2 bg-base font-bold mt-4 md:mt-0"
            >
              <a href="#Hireme">SEND IT!</a>
            </button>
          </div>
          <div class="mt-12">
            <p class="md:text text-error">+91 6355001165</p>

            <a
              href="https://mail.google.com/mail/?authuser=0"
              class="md:text-left text-error mt-3 block underline"
              >patelmohit8379@gmail.com</a
            >

            <div class="flex mt-20 space-x-6">

              <a href="https://leetcode.com/problemset/all/">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  ><path
                    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                    fill="white"
                    /></svg
                >
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                aria-label="follow me on linkedIn link"
              >
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                  ><path
                    d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    fill="white"
                  /></svg
                >
              </a>

              <a href="https://github.com/meet1803">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  ><path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    fill="white"
                  /></svg
                >
              </a>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>


    
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
