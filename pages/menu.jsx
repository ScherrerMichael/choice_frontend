import React, { Children, Component, createRef } from 'react';

export default function Menu({ data }) {
    const Appetizers = createRef();
    const KFC = createRef();
    const Entrees = createRef();
    const Teriyaki = createRef();
    const Combinations = createRef();
    const Specials = createRef();
    return (
        <>
            {/* <Header></Header> */}
            <div className="menu-wrapper backgound-img">
                <div className="menu-left">
                    <div className="item-groups">
                        <button className="button" onClick={() => {
                            Appetizers.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Appetizers</button>

                        <button className="button" onClick={() => {
                            KFC.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>KFC</button>

                        <button className="button" onClick={() => {
                            Entrees.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Entrees</button>

                        <button className="button" onClick={() => {
                            Teriyaki.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Teriyaki</button>

                        <button className="button" onClick={() => {
                            Combinations.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Combinations</button>

                        <button className="button" onClick={() => {
                                Specials.current.scrollIntoView({behavior: 'smooth'});
                            }}>Specials</button>
                    </div>
                </div>
                <div className="menu-middle">

                    <h2 className="menu-title">Menu</h2>
                    <ItemType refProp={Appetizers} name={'APPETIZERS'}></ItemType>
                    <ItemGroup text="Comes with one pork, and one veggie roll">
                    <MenuItem name="Egg Rolls (2)" price="$4.99" />
                    </ItemGroup>
                    <MenuItem name="Egg Rolls Mini (5)" price="$4.99" />
                    <MenuItem name="Gyoza (10)" price="$6.99" />
                    <MenuItem name="French Fries" price="$4.99" />
                    <MenuItem name="Onion Rings" price="$5.99" />
                    <MenuItem name="Jalapeño Poppers (6)" price="$5.99" />
                    <MenuItem name="Side Rice or Salad" price="$2.50" />

                    <ItemType refProp={KFC} parenthesis={"(Korean Fried Chicken)"}name={'KFC'}></ItemType>
                    <MenuItem name="6 piece" price="$8.99" />
                    <MenuItem name="9 piece" price="$12.99" />
                    <MenuItem name="12 piece" price="$16.99" />
                    <ItemGroup text="Sauces: of BBQ, ranch, ketchup, tartar, honey mustard">
                    <MenuItem name="Dipping Sauce" price="$0.50" />
                    </ItemGroup>

                    <ItemType refProp={Entrees} name={'ENTREES'}></ItemType>
                    <MenuItem name="Vegetable" price="$9.99" />
                    <MenuItem name="Tofu" price="$11.99" />
                    <MenuItem name="Chicken" price="$11.99" />
                    <MenuItem name="Beef" price="$13.99" />
                    <MenuItem name="Shrimp" price="$15.99" />

                    <ItemType refProp={Teriyaki} name={'TERIYAKI'}></ItemType>
                    <MenuItem name="Tofu" price="$9.99" />
                    <MenuItem name="Chicken" price="$10.99" />
                    <MenuItem name="Spicy Chicken" price="$11.99" />
                    <MenuItem name="Breast (White meat)" price="$12.99" />
                    <MenuItem name="Chicken Katsu" price="$13.99" />
                    <MenuItem name="Beef" price="$14.99" />
                    <MenuItem name="Shrimp" price="$15.99" />
                    <MenuItem name="Short Rib" price="$16.99" />
                    <MenuItem name="Mongolian Beef" price="$14.99" />
                    <MenuItem name="Broccoli Beef" price="$14.99" />

                    <ItemType refProp={Combinations} name={'COMBINATIONS'}></ItemType>
                    <ItemGroup text="Includes: (4) Gyoza OR (1) Eggroll">
                    <MenuItem name="Chicken" price="$12.99" />
                    <MenuItem name="Spicy Chicken" price="$13.99" />
                    <MenuItem name="Breast" price="$14.99" />
                    <MenuItem name="Katsu" price="$14.99" />
                    <MenuItem name="Beef" price="$15.99" />
                    <MenuItem name="Shrimp" price="$16.99" />
                    </ItemGroup>
                    {/* above includes your choice of Gyoza or Egg Roll */}
                    <MenuItem name="Chicken & Katsu" price="$14.99" />
                    <MenuItem name="Spicy Chicken & Katsu" price="$15.99" />
                    <MenuItem name="Chicken & Shrimp" price="$17.99" />
                    <MenuItem name="Chicken & Short Rib" price="$19.99" />
                    {/* All Teriyaki dishes served with rice and salad */}
                    {/* (+$1.00) Make it spicy*/}

                    <ItemType refProp={Specials} name={'SPECIALS'}></ItemType>
                    <MenuItem name="Choice Burger" price="$9.99" />
                    <MenuItem name="Katsu Burger" price="$9.99" />
                    <MenuItem name="Hoagie's Philly Cheese" price="$9.99" />
                    <MenuItem name="Fish & Chips" price="$11.99" />
                </div>
                <div className="menu-right"></div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

class ItemType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            parenthesis: String,
        }
    }
    render() {
        const {
            name,
            parenthesis,
        } = this.props
        return (
            <div ref={this.props.refProp} className="item-type">
                <strong>{name}</strong>
                <span className="group-par">{parenthesis}</span>
            </div>
        );
    }
}
//wrapper component
const ItemGroup = (props) => {
    return props.text ? (
        <div className="item-group">
        {props.children}
        <div className="group-text">{props.text}</div>
        </div>
    ) : (
        props.children
    );
};


class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            price: String,
        }
    }
    render() {
        const {
            name,
            price,
        } = this.props
        return (
            <div className="item">
                <div className="item-name">{name}</div>
                <div className="item-price">{price}</div>
            </div>
        );
    }
}

// function comapare_name(a, b) {
//     if (a.name.toLowerCase() < b.catagory.toLowerCase()) {
//         return -1;
//     }
//     if (a.name.toLowerCase() > b.catagory.toLowerCase()) {
//         return -1;
//     }
//     return 0;
// }

// function getCatagoryFoods(cat, data) {
//     let result = []
//     for (let i in data) {
//         if (data[i].catagory === cat) {
//             // console.log(data[i])
//             result.push(data[i]);
//         }
//     }
//     return result;
// }

// export async function getStaticProps(content) {
//     try{
//     const res = await fetch(process.env.API_ROUTE + '/foodItems')
//     const data = await res.json()
//     data.sort(comapare_name);
//     //   console.log(data);
//     const appetizers = getCatagoryFoods("Appetizer", data);
//     const entrees = getCatagoryFoods("Entree", data);
//     const kfc = getCatagoryFoods("KFC", data);
//     const combinations = getCatagoryFoods("Combinations", data)
//     const teriyaki = getCatagoryFoods("Teriyaki", data)
//     const specials = getCatagoryFoods("Specials", data)

//     if (!data){
//         return {notFound: true};
//     }

//     return {
//         props: { data :
//         {
//             appetizers,
//             kfc,
//             entrees,
//             teriyaki,
//             combinations,
//             specials,

//         }}, //will be passed to the page
//     }
//     } catch(e) {
//         return {notFound: true};
//     }
// }