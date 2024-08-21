import p1_img from './product_1.jpg';
import p2_img from './product_2.jpg';
import p3_img from './product_3.jpg';
import p4_img from './product_4.jpg';
import p5_img from './product_5.jpg';
import p6_img from './product_6.jpg';
import p7_img from './product_7.jpg';
import p8_img from './product_8.jpg';
import p9_img from './product_9.jpg';
import p10_img from './product_10.jpg';
import p11_img from './product_11.jpg';
import p12_img from './product_12.jpg';
import p13_img from './product_13.jpg';
import p14_img from './product_14.jpg';
import p15_img from './product_15.jpg';
import p16_img from './product_16.jpg';
import p17_img from './product_17.jpg';
import p18_img from './product_18.jpg';
import p19_img from './product_19.jpg';
import p20_img from './product_20.jpg';
import p21_img from './product_21.jpg';
import p22_img from './product_22.jpg';
import p23_img from './product_23.jpg';
import p24_img from './product_24.jpg';


let all_product = [
    {
        id: 1,
        name: "Anua - Heartleaf Quercetinol Pore Deep Cleansing Foam",
        category: "FaceCleansers",
        image: p1_img,
        new_price: 11.00,
        old_price: 15.00,
    }
    ,
    {
        id: 2,
        name: "Beauty of Joseon - Ginseng Essence Water",
        category: "Toners",
        image: p2_img,
        new_price: 14.40,
        old_price: 17.00,
    },
    {
        id: 3,
        name: "Anua - Heartleaf 80% Soothing Ampoule",
        category: "Serums",
        image: p3_img,
        new_price: 22.60,
        old_price: 27.00,
    },
    {
        id: 4,
        name: "Anua - Heartleaf 77% Soothing Toner",
        category: "Toners",
        image: p4_img,
        new_price: 18.40,
        old_price: 24.00,
    },
    {
        id: 5,
        name: "Anua - Peach 77 Niacin Essence Toner",
        category: "Toners",
        image: p5_img,
        new_price: 17.00,
        old_price: 25.00,
    },
    {
        id: 6,
        name: "Anua - Niacinamide 10% + TXA 4% Serum",
        category: "Serums",
        image: p6_img,
        new_price: 18.50,
        old_price: 24.00,
    },
    {
        id: 7,
        name: "SKIN 1004 - Madagascar Centella Tea-trica BHA Foam",
        category: "FaceCleansers",
        image: p7_img,
        new_price: 10.40,
        old_price: 16.00,
    },
    {
        id: 8,
        name: "mixsoon - Bean Cleansing Oil",
        category: "FaceCleansers",
        image: p8_img,
        new_price: 18.75,
        old_price: 22.50,
    },
    {
        id: 9,
        name: "Anua - Heartleaf 70 Intense Calming Cream",
        category: "Moisturizers",
        image: p9_img,
        new_price: 22.40,
        old_price: 26.99,
    },
    {
        id: 10,
        name: "One leaf - SKIN 1004 - Madagascar Centella Ampoule Foam",
        category: "FaceCleansers",
        image: p10_img,
        new_price: 10.34,
        old_price: 14.00,
    }
    ,
    {
        id: 11,
        name: "Beauty of Joseon - Dynasty Cream",
        category: "Moisturizers",
        image: p11_img,
        new_price: 19.20,
        old_price: 26.00,
    }
    ,
    {
        id: 12,
        name: "Anua - Peach 70 Niacin Serum",
        category: "Serums",
        image: p12_img,
        new_price: 20.00,
        old_price: 24.00,
    },
    {
        id: 13,
        name: "Beauty of Joseon - Glow Serum",
        category: "Serums",
        image: p13_img,
        new_price: 13.60,
        old_price: 15.00,
    },
    {
        id: 14,
        name: "ROUND LAB - 1025 Dokdo Toner Jumbo",
        category: "Toners",
        image: p14_img,
        new_price: 23.80,
        old_price: 28.00,
    },
    {
        id: 15,
        name: "ROUND LAB - Birch Juice Moisturizing Cream",
        category: "Moisturizers",
        image: p15_img,
        new_price: 23.40,
        old_price: 28.00,
    },
    {
        id: 16,
        name: "SKIN 1004 - Madagascar Centella Probio-Cica Enrich Cream",
        category: "Moisturizers",
        image: p16_img,
        new_price: 12.00,
        old_price: 16.00,
    },
    {
        id: 17,
        name: "ROUND LAB - 1025 Dokdo Cleanser",
        category: "FaceCleansers",
        image: p17_img,
        new_price: 12.00,
        old_price: 15.00,
    },
    {
        id: 18,
        name: "mixsoon - Bean Essence",
        category: "Serums",
        image: p18_img,
        new_price: 26.25,
        old_price: 35.00,
    },
    {
        id: 19,
        name: "APLB - Retinol Vitamin C Vitamin E Ampoule Serum",
        category: "Serums",
        image: p19_img,
        new_price: 9.80,
        old_price: 16.00,

    },
    {
        id: 20,
        name: " ROVECTIN - Aqua Hydration Gentle Cleansing Gel",
        category: "FaceCleansers",
        image: p20_img,
        new_price: 16.80,
        old_price: 20.00,
    },
    {
        id: 21,
        name: "Anua - BHA 2% Gentle Exfoliating Toner",
        category: "Toners",
        image: p21_img,
        new_price: 18.40,
        old_price: 25.30,
    },
    {
        id: 22,
        name: "Dr. Ceuracle - Vegan Kombucha Tea Essence",
        category: "Toners",
        image: p22_img,
        new_price: 26.99,
        old_price: 33.74,
    },
    {
        id: 23,
        name: "Anua - Peach 77 Niacin Enriched Cream",
        category: "Moisturizers",
        image: p23_img,
        new_price: 21.92,
        old_price: 27.40,
    },
    {
        id: 24,
        name: "Haruharu WONDER - Black Rice 10 Hyaluronic Cream Unscented",
        category: "Moisturizers",
        image: p24_img,
        new_price: 13.20,
        old_price: 22.00,
    }







]
export default all_product;