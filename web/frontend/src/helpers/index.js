import {bakedItems, coffeeItems, teaItems} from "@/store/menuItems";

export const getMenuData = routePath => {
    if (routePath.includes("coffee")) {
        return coffeeItems;
    } else if (routePath.includes("tea")) {
        return teaItems;
    } else {
        return bakedItems;
    }
}