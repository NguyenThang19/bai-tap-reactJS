import React, { useRef, useState } from "react";
import '../css/scss/itemsCategory.scss';
import { dishCard, listCategory } from "../data/data";
import DishCard from "./dishCard";
const Category = () => {

    const [toggleTabs, setToggleTabs] = useState(0);
    const HandleToggleTabs = (index) => {
        setToggleTabs(index);
    }

    return (
        <>
            <ul className="category-menu">
                {
                    listCategory.map((value, index) => {
                        return <li className="category-items" tabIndex={index} key={index} onClick={() => HandleToggleTabs(index)}>
                            {value}
                        </li>
                    })
                }
            </ul>

            {/* Menu when small Dimesions Display */}
            <select id="check-list-category" className="select-items" name="menu-category" onChange={(e) => { HandleToggleTabs(parseInt(e.currentTarget.value)) }} >
                {
                    listCategory.map((value, index) => {
                        return <option value={index} key={index}>
                            {value}
                        </option>
                    })
                }
            </select>
            {/* End */}
            <div className={toggleTabs === 0 ? 'list-dish-card' : 'none-active'}>
                {
                    dishCard.map((value, index) => {
                        return <DishCard
                            nameItems={value.nameDish}
                            imageItems={value.image}
                            priceItems={value.price}
                            oldPriceItems={value.oldPrice}
                            descItems={value.descDish}
                            perCentItems={value.percent}
                            key={`disCard-${index}`}
                        />
                    })
                }
            </div>

            {/* Example product: 2 items */}
            <div className={toggleTabs === 1 ? 'list-dish-card' : 'none-active'}>
                {
                    dishCard.map((value, index) => {
                        if (index <= 1) {
                            return <DishCard
                                nameItems={value.nameDish}
                                imageItems={value.image}
                                priceItems={value.price}
                                oldPriceItems={value.oldPrice}
                                descItems={value.descDish}
                                perCentItems={value.percent}
                                key={`disCard-${index}`}
                            />
                        }
                    })
                }
            </div>

            {/* Examples products: 3 items */}
            <div className={toggleTabs === 2 ? 'list-dish-card' : 'none-active'}>

                {
                    dishCard.map((value, index) => {
                        if (index <= 2) {
                            return <DishCard
                                nameItems={value.nameDish}
                                imageItems={value.image}
                                priceItems={value.price}
                                oldPriceItems={value.oldPrice}
                                descItems={value.descDish}
                                perCentItems={value.percent}
                                key={`disCard-${index}`}
                            />
                        }
                    })
                }
            </div>

            {/* Examples propduct: 4 items */}
            <div className={toggleTabs === 3 ? 'list-dish-card' : 'none-active'}>

                {
                    dishCard.map((value, index) => {
                        if (index <= 3) {
                            return <DishCard
                                nameItems={value.nameDish}
                                imageItems={value.image}
                                priceItems={value.price}
                                oldPriceItems={value.oldPrice}
                                descItems={value.descDish}
                                perCentItems={value.percent}
                                key={`disCard-${index}`}
                            />
                        }
                    })
                }
            </div>

            {/* Examples product: 5 items */}
            <div className={toggleTabs === 4 ? 'list-dish-card' : 'none-active'}>

                {
                    dishCard.map((value, index) => {
                        if (index <= 4) {
                            return <DishCard
                                nameItems={value.nameDish}
                                imageItems={value.image}
                                priceItems={value.price}
                                oldPriceItems={value.oldPrice}
                                descItems={value.descDish}
                                perCentItems={value.percent}
                                key={`disCard-${index}`}
                            />
                        }
                    })
                }
            </div>

            {/* Examples product: 6 items */}
            <div className={toggleTabs === 5 ? 'list-dish-card' : 'none-active'}>

                {
                    dishCard.map((value, index) => {
                        if (index <= 6) {
                            return <DishCard
                                nameItems={value.nameDish}
                                imageItems={value.image}
                                priceItems={value.price}
                                oldPriceItems={value.oldPrice}
                                descItems={value.descDish}
                                perCentItems={value.percent}
                                key={`disCard-${index}`}
                            />
                        }
                    })
                }
            </div>
        </>
    )
}

export default Category;