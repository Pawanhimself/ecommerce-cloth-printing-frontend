import { faker, Faker } from "@faker-js/faker";
import fs from "fs";

function generateVariant(color){
    const sizes = ['S','M','L','XL']
    return {
        id: faker.string.uuid(),
        color: color,
        sizes: sizes.map(size => ({
            size,
            stock: faker.number.int({min: 0, max: 50}),
            price: faker.number.int({min: 299, max: 800})
        }))
    }
}

function generateProduct() {
    const colors = ['red', 'blue', 'green', 'black', 'white'];
    return {
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        base_price: faker.number.int({min: 299, max: 800}),
        categories: [faker.commerce.department(), 'Custom Printing'],
        images: [
            faker.image.urlLoremFlickr({category: 'clothing', width: 600, height: 600}),
            faker.image.urlLoremFlickr({category: 'clothing', width: 600, height: 600}),
            faker.image.urlLoremFlickr({category: 'clothing', width: 600, height: 600}),
            faker.image.urlLoremFlickr({category: 'clothing', width: 600, height: 600}),
        ],
        variants: colors.map(generateVariant),
        print_area: ['front', 'back', 'left sleeve', 'right sleeve'],
        customization: {
            allow_upload: true,
            max_file_size_mb: 10,
            file_types: ['jpg','jpeg','png'],
            placement_preview_enabled: true
        },
        shipping_options: [
            {
                mathod: 'Standard',
                price: 39,
                duration_days: 5
            },
            {
                method: 'Express',
                price: 79,
                duration_days: 2
            },
        ],
        tags: faker.helpers.arrayElements(['custom', 'print', 'tshirt', 'eco', 'limited'], 3)
    };
}

//to generate products.json file simply run "node products.js" and product will be generated
//if you want need more than 5 products just change the length with your desired product count like 10
const products = Array.from({ length: 5 }, generateProduct);

//image are not actually products or cloths for now you can use this to set
//products page according to the actual product data that we get from api
fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
console.log('products.json generated with cloth printing products.');
