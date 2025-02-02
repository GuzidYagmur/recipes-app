const foodMenus = document.querySelector(".foodMenu");
let recipes = [];
fetch("https://dummyjson.com/recipes").then(res => {
    if(res.ok){
        return res.json()
    }
}).then(data => {
    recipes = [
        ...data.recipes
    ]
    for (const recipe of data.recipes) {
        const template = productTemplate(recipe);
        foodMenus.innerHTML += template;
    }
}).catch(e => {
    foodMenus.innerHTML = "Bir Hata Oluştu :/"
})

// const a = null;
// const image = a ?? "https://placehold.co/320x240"

function productTemplate({ id, name, image, caloriesPerServing, cookTimeMinutes }){
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
    `
}