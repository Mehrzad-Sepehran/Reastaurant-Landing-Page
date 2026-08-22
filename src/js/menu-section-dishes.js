const dishes = [
  {
    type: "main",
    name: "Duck Confit",
    title: "Chef's Favourite",
    nickname: "Signature",
    ingredients:
      "Slow-rendered Périgord duck leg, lentils du Puy, sour cherry reduction, micro watercress.",
    price: 42,
    imgSrc: "./src/images/Duck-Confit.avif",
  },
  {
    type: "main",
    name: "Seared Halibut",
    title: "Seasonal",
    nickname: "From the Sea",
    ingredients:
      "Cornish halibut, cauliflower velouté, caperberry, golden raisin, crisp capers.",
    price: 48,
    imgSrc: "./src/images/Seared-Halibut.avif",
  },
  {
    type: "starter",
    name: "Truffle Risotto",
    title: "Vegetarian",
    nickname: "Vegetable",
    ingredients:
      "Carnaroli rice, aged Parmigiano, Périgord black truffle, chives, 48-hour stock.",
    price: 36,
    imgSrc: "./src/images/Truffle-Risotto.avif",
  },
  {
    type: "desert",
    name: "Mille-feuille",
    title: "House Classic",
    nickname: "Dessert",
    ingredients:
      "Caramelised puff pastry, Tahitian vanilla crème légère, wild strawberries, coulis.",
    price: 18,
    imgSrc: "./src/images/Mille-feuille.avif",
  },
];

const dishesContainer = document.querySelector("#dishes-container");
const allBtn = document.querySelector("#all-btn");
const startersBtn = document.querySelector("#starters-btn");
const mainsBtn = document.querySelector("#mains-btn");
const desertsBtn = document.querySelector("#deserts-btn");

const removeExtraClassesFromOtherBtns = () => {
  const everyBtn = document.querySelectorAll(".dish-btn");
  everyBtn.forEach((button) => {
    button.classList.remove("text-background");
    button.classList.remove("bg-primary");
  });
};

const addClassesToClickedBtn = (clickedBtn) => {
  clickedBtn.classList.remove("text-foreground");
  clickedBtn.classList.add("text-background");
  clickedBtn.classList.add("bg-primary");
};

allBtn.addEventListener("click", () => {
  removeExtraClassesFromOtherBtns();
  addClassesToClickedBtn(allBtn)

  dishesContainer.innerHTML = "";
  dishes.forEach((dish) => {
    dishesContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="bg-secondary">
            <div class="relative overflow-hidden h-65">
              <img
                class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                src="${dish.imgSrc}"
                alt=""
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-2 py-1 text-[10px] font-DMmono tracking-[0.15em] text-foreground bg-background/90 uppercase"
                  >${dish.title}</span
                >
              </div>
            </div>
            <div class="flex flex-row justify-between gap-4 items-start p-7">
              <div class="flex-1">
                <div
                  class="text-[10px] text-muted font-DMmono tracking-[0.2em] uppercase mb-2"
                >
                  ${dish.nickname}
                </div>
                <h3 class="text-xl mb-2 font-Playfair">${dish.name}</h3>
                <p class="text-sm text-muted leading-relaxed">
                  ${dish.ingredients}
                </p>
              </div>
              <div class="text-lg mt-6 font-Playfair">$${dish.price}</div>
            </div>
          </div>
        `,
    );
  });
});

startersBtn.addEventListener("click", () => {
  removeExtraClassesFromOtherBtns();
  addClassesToClickedBtn(startersBtn)

  dishesContainer.innerHTML = "";
  dishes.forEach((dish) => {
    if (dish.type === "starter") {
      dishesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="bg-secondary">
            <div class="relative overflow-hidden h-65">
              <img
                class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                src="${dish.imgSrc}"
                alt=""
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-2 py-1 text-[10px] font-DMmono tracking-[0.15em] text-foreground bg-background/90 uppercase"
                  >${dish.title}</span
                >
              </div>
            </div>
            <div class="flex flex-row justify-between gap-4 items-start p-7">
              <div class="flex-1">
                <div
                  class="text-[10px] text-muted font-DMmono tracking-[0.2em] uppercase mb-2"
                >
                  ${dish.nickname}
                </div>
                <h3 class="text-xl mb-2 font-Playfair">${dish.name}</h3>
                <p class="text-sm text-muted leading-relaxed">
                  ${dish.ingredients}
                </p>
              </div>
              <div class="text-lg mt-6 font-Playfair">$${dish.price}</div>
            </div>
          </div>
        `,
      );
    }
  });
});

mainsBtn.addEventListener("click", () => {
  removeExtraClassesFromOtherBtns();
  addClassesToClickedBtn(mainsBtn)

  dishesContainer.innerHTML = "";
  dishes.forEach((dish) => {
    if (dish.type === "main") {
      dishesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="bg-secondary">
            <div class="relative overflow-hidden h-65">
              <img
                class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                src="${dish.imgSrc}"
                alt=""
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-2 py-1 text-[10px] font-DMmono tracking-[0.15em] text-foreground bg-background/90 uppercase"
                  >${dish.title}</span
                >
              </div>
            </div>
            <div class="flex flex-row justify-between gap-4 items-start p-7">
              <div class="flex-1">
                <div
                  class="text-[10px] text-muted font-DMmono tracking-[0.2em] uppercase mb-2"
                >
                  ${dish.nickname}
                </div>
                <h3 class="text-xl mb-2 font-Playfair">${dish.name}</h3>
                <p class="text-sm text-muted leading-relaxed">
                  ${dish.ingredients}
                </p>
              </div>
              <div class="text-lg mt-6 font-Playfair">$${dish.price}</div>
            </div>
          </div>
        `,
      );
    }
  });
});

desertsBtn.addEventListener("click", () => {
  removeExtraClassesFromOtherBtns();

  addClassesToClickedBtn(desertsBtn)

  dishesContainer.innerHTML = "";
  dishes.forEach((dish) => {
    if (dish.type === "desert") {
      dishesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="bg-secondary">
            <div class="relative overflow-hidden h-65">
              <img
                class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                src="${dish.imgSrc}"
                alt=""
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-2 py-1 text-[10px] font-DMmono tracking-[0.15em] text-foreground bg-background/90 uppercase"
                  >${dish.title}</span
                >
              </div>
            </div>
            <div class="flex flex-row justify-between gap-4 items-start p-7">
              <div class="flex-1">
                <div
                  class="text-[10px] text-muted font-DMmono tracking-[0.2em] uppercase mb-2"
                >
                  ${dish.nickname}
                </div>
                <h3 class="text-xl mb-2 font-Playfair">${dish.name}</h3>
                <p class="text-sm text-muted leading-relaxed">
                  ${dish.ingredients}
                </p>
              </div>
              <div class="text-lg mt-6 font-Playfair">$${dish.price}</div>
            </div>
          </div>
        `,
      );
    }
  });
});
