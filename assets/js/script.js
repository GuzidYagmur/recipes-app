const foodMenus = document.querySelector(".foodMenu");
let recipes = [];

async function fetchRecipes() {
    try {
        foodMenus.innerHTML = `<i id="loading" class="fa-solid fa-spinner fa-spin"></i>`;

        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
            throw new Error("Veri alınırken hata oluştu");
        }
        foodMenus.innerHTML = "";
        const data = await res.json();
        recipes = [...data.recipes];

        for (const recipe of data.recipes) {
            const template = productTemplate(recipe);
            foodMenus.innerHTML += template;
        }
    } catch (error) {
        foodMenus.innerHTML = "Bir Hata Oluştu :/";
        console.error(error);
    }
}

fetchRecipes();

function productTemplate({ id, name, image, caloriesPerServing, cookTimeMinutes }) {
    return `
        <div class="menu-content">
            <div class="img-head">
                <img src="${image}" alt="">
                <div class="food-head">
                    <h4>${name}</h4>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="kcal-min">
                <div class="kcal">
                    <i class="fa-sharp fa-solid fa-fire"></i>
                    <p>${caloriesPerServing} Kcal  ·</p>
                </div>
                <div class="min">
                    <i class="fa-regular fa-clock"></i>
                    <p>${cookTimeMinutes} min</p>
                </div>
            </div>
        </div>
    `;
}
