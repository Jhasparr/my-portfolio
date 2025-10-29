<div className="flex w-full lg:hidden py-2 justify-between mt-0 mx-auto ">
        {/* Mobile Menu Conditionals */}

        <div className="">
          <button
            type="button"
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleNav();
              }
            }}
            tabIndex={0}
            className="block lg:hidden"
            aria-label="Toggle navigation"
          >
            <MoreCircleIcon className="dark:text-white" />
          </button>
          <div
            className={`fixed overflow-y-auto top-0 pt-[18px] left-0 w-[300px] md:w-1/2 h-full bg-white dark:bg-[linear-gradient(180deg,_#0a0a0a,_#1f1f1f,_#0a0a0a)] z-50 transition-transform duration-500 ${
              open ? "transform translate-x-0 " : "transform -translate-x-full "
            }`}
          >
            {/*Close Mobile Menu */}
            <div className="px-4 flex items-center justify-between">
             
              <button
                type="button"
                className="pr-2"
                onClick={toggleNav}
                aria-label="Close navigation"
              >
                <CloseCircleIcon className="dark:text-white" />
              </button>
            </div>
            {/* Mobile Button Slider */}
            <div className=" flex mt-10 flex-col font-bold max-w-64 justify-between ">
              <div className="px-6 py-2">
                <h3>Home</h3>
              </div>
              <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                <div className="w-64 ">
                  <div className="flex flex-row justify-between space-x-2 hover:bg-gray-50 dark:active:bg-[#212121]  dark:hover:bg-[#212121] px-4 py-3 rounded-2xl  ">
                    <div className="flex flex-row w-full  ">
                      <div className=" flex flex-row shadow-md gap-2 w-9 h-9 rounded-lg ">
                        
                        <Image
                          src={"/logo.png"}
                          alt={"Logo"}
                          width={35}
                height={30}
                          className="w-full h-full dark:invert object-cover rounded-lg"
                        />
                        <div className=" justify-center items-center flex ">
                          <h2 className="md:text-[18px] text-[15px] font-bold">
                            Home
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-2">
                <h3>Personal</h3>
              </div>
              <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                {subCard.map((index, key) => (
                  <NavIcons key={key} {...index} />
                ))}
              </div>

              <div className=" px-6 relative flex flex-row py-4 font-bold max-w-64 justify-between">
                <h3>Apps</h3>
                <LeftArrowIcon
                  className={`${navOpen ? "rotate-270" : "rotate-180"}`}
                  onClick={() => setNavOpen(!navOpen)}
                />
                {navOpen && (
                  <div className=" absolute top-12 left-0 py-2">
                    <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                      {mainCard.map((index, key) => (
                        <NavIcons key={key} {...index} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        <div
          className="flex transition-all space-x-1 z-50  sticky rounded-xl px-2 py-1 "
          onClick={() => setDark(!dark)}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </div>
      </div>