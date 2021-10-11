import React, { Children, Component, createRef } from 'react';
import Footer from './components/footer'
import Header from './components/header'

export default function Menu({ data }) {
    const Appetizers = createRef();
    const KFC = createRef();
    const Entrees = createRef();
    const Teriyaki = createRef();
    const Combinations = createRef();
    const Specials = createRef();
    return (
        <>
            <Header />
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
                            Specials.current.scrollIntoView({ behavior: 'smooth' });
                        }}>Specials</button>
                    </div>
                        <div className="menu-notes">
                            <p>
                                To-go box fee: $0.50
                            </p>
                            <p>
                                Please order at least 10 minutes before closing time
                            </p>
                        </div>
                </div>
                <div className="menu-middle">

                    <h2 className="menu-title">Menu</h2>
                    <ItemType refProp={Appetizers} name={'APPETIZERS'}></ItemType>
                    <ItemGroup>
                        <MenuItem name="Egg Rolls (2)" price="$4.99"
                            description="Comes 1 pork & 1 veggie eggroll" />
                        <MenuItem name="Egg Rolls Mini (5)" price="$4.99"
                            description="5 mini vegetable rolls" />
                        <MenuItem name="Gyoza (10)" price="$6.99" />
                        <MenuItem name="French Fries" price="$4.99" />
                        <MenuItem name="Onion Rings" price="$5.99" />
                        <MenuItem name="Jalapeño Poppers (6)" price="$5.99" />
                        <MenuItem name="Side Rice or Salad" price="$2.50" />
                    </ItemGroup>

                    <ItemType refProp={KFC} parenthesis={"(Korean Fried Chicken)"} name={'KFC'}></ItemType>
                    <ItemGroup>
                        <MenuDescription text="Choose: Original ~ Sweet & Sour ~ Sweet & Spicy" />
                        <MenuItem name="6 piece" price="$8.99" />
                        <MenuItem name="9 piece" price="$12.99" />
                        <MenuItem name="12 piece" price="$16.99" />
                        <MenuItem name="Dipping Sauce" price="$0.50"
                            description="BBQ, Ranch, Ketchup, Tartar, Honey Mustard" />
                    </ItemGroup>

                    <ItemType refProp={Entrees} name={'ENTREES'}></ItemType>
                    <ItemGroup>
                        <MenuDescription text="Choose: Yakisoba ~ Stir Fry ~ Fried Rice" />
                        <MenuItem name="Vegetable" price="$9.99" />
                        <MenuItem name="Tofu" price="$11.99" />
                        <MenuItem name="Chicken" price="$11.99" />
                        <MenuItem name="Beef" price="$13.99" />
                        <MenuItem name="Shrimp" price="$15.99" />
                    </ItemGroup>

                    <ItemType refProp={Teriyaki} name={'TERIYAKI'}></ItemType>
                    <ItemGroup>
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
                    </ItemGroup>

                    <ItemType refProp={Combinations} name={'COMBINATIONS'}></ItemType>
                    <ItemGroup>
                        <MenuItem name="Chicken*" price="$12.99" />
                        <MenuItem name="Spicy Chicken*" price="$13.99" />
                        <MenuItem name="Breast*" price="$14.99" />
                        <MenuItem name="Katsu*" price="$14.99" />
                        <MenuItem name="Beef*" price="$15.99" />
                        <MenuItem name="Shrimp*" price="$16.99" />
                        <MenuItem name="Chicken & Katsu" price="$14.99" />
                        <MenuItem name="Spicy Chicken & Katsu" price="$15.99" />
                        <MenuItem name="Chicken & Shrimp" price="$17.99" />
                        <MenuItem name="Chicken & Short Rib" price="$19.99" />
                        <MenuDescription text="All teriyaki dishes served with rice and salad" />
                        <MenuDescription text="$1.00 - make it spicy" />
                        <MenuDescription text="* Choice of Gyoza (4) OR Egg Roll (1)" />
                    </ItemGroup>

                    <ItemType refProp={Specials} name={'SPECIALS'}></ItemType>
                    <ItemGroup>
                        <MenuItem name="Choice Burger" price="$9.99"
                            description="8 oz. ground beef, smoked bacon, american cheese. Served with fries, lettuce, and tomato" />
                        <MenuItem name="Katsu Burger" price="$9.99"
                            description="Fried chicken cutlet burger, served with fries, lettuce, and tomato" />
                        <MenuItem name="Hoagie's Philly Cheese" price="$9.99"
                            description="Tender beef with onions, bell peppers, swiss cheese and served with fries" />
                        <MenuItem name="Fish & Chips" price="$11.99"
                            description="Beer battered cod an served with fries and tartar sauce" />
                    </ItemGroup>
                </div>
                <div className="menu-right"></div>
            </div>
            <Footer />
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
        <div className="item-group">
            {props.children}
        </div>
    );
};

const MenuDescription = (props) => {
    return props.text ? (
        <div className="item-footer">
            {props.text}
        </div>
    ) : (
        <>
        </>
    )
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            price: String,
            description: String,
        }
    }
    render() {
        const {
            name,
            price,
            description,
        } = this.props
        return (
            <div className="item">
                <div className="item-name">{name}</div>
                {/* <div className="item-elipses">...............................................................</div> */}
                <div className="item-price">{price}</div>
                {description ?
                    <div className="item-description">
                        {description}
                    </div> :
                    <>
                    </>}
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