import React, { Component, createRef } from 'react';

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
                    <ItemGroup refProp={Appetizers} name={'APPETIZERS'}></ItemGroup>
                    <MenuItem name="Egg Rolls (2)" price="$4.99" />
                    <MenuItem name="Gyoza (10)" price="$6.99" />
                    <MenuItem name="French Fries" price="$4.99" />
                    <MenuItem name="Onion Rings" price="$5.99" />
                    <MenuItem name="Jalapeño Poppers (6)" price="$5.99" />
                    <MenuItem name="Side Rice or Salad" price="$2.50" />

                    <ItemGroup refProp={KFC} parenthesis={"(Korean Fried Chicken)"}name={'KFC'}></ItemGroup>
                    <MenuItem name="6 piece" price="$8.99" />
                    <MenuItem name="9 piece" price="$12.99" />
                    <MenuItem name="12 piece" price="$16.99" />
                    <MenuItem name="Dipping Sauce" price="$0.50" />

                    <ItemGroup refProp={Entrees} name={'ENTREES'}></ItemGroup>
                    <MenuItem name="Vegetable" price="$9.99" />
                    <MenuItem name="Tofu" price="$11.99" />
                    <MenuItem name="Chicken" price="$11.99" />
                    <MenuItem name="Beef" price="$13.99" />
                    <MenuItem name="Shrimp" price="$15.99" />

                    <ItemGroup refProp={Teriyaki} name={'TERIYAKI'}></ItemGroup>
                    <MenuItem name="Tofu" price="$9.99" />
                    <MenuItem name="Chicken" price="$10.99" />
                    <MenuItem name="Spiy Chicken" price="$11.99" />
                    <MenuItem name="Breast (White meat)" price="$12.99" />
                    <MenuItem name="Chicken Katsu" price="$13.99" />
                    <MenuItem name="Beef" price="$14.99" />
                    <MenuItem name="Shrimp" price="$15.99" />
                    <MenuItem name="Short Rib" price="$16.99" />
                    <MenuItem name="Mongolian Beef" price="$14.99" />
                    <MenuItem name="Broccoli Beef" price="$14.99" />

                    <ItemGroup refProp={Combinations} name={'COMBINATIONS'}></ItemGroup>
                    <MenuItem name="Chicken" price="$12.99" />
                    <MenuItem name="Spicy Chicken" price="$13.99" />
                    <MenuItem name="Breast" price="$14.99" />
                    <MenuItem name="Katsu" price="$14.99" />
                    <MenuItem name="Beef" price="$15.99" />
                    <MenuItem name="Shrimp" price="$16.99" />
                    {/* above includes your choice of Gyoza or Egg Roll */}
                    <MenuItem name="Chicken & Katsu" price="$14.99" />
                    <MenuItem name="Spicy Chicken & Katsu" price="$15.99" />
                    <MenuItem name="Chicken & Shrimp" price="$17.99" />
                    <MenuItem name="Chicken & Short Rib" price="$19.99" />
                    {/* All Teriyaki dishes served with rice and salad */}
                    {/* (+$1.00) Make it spicy*/}

                    <ItemGroup refProp={Specials} name={'SPECIALS'}></ItemGroup>
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

class ItemGroup extends Component {
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
            <div ref={this.props.refProp} className="item-group">
                <strong>{name}</strong>
                <span className="group-par">{parenthesis}</span>
            </div>
        );
    }
}


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