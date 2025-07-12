const products = {
  Men: [
    {
      name: 'Ironclad Tee',
      price: 799,
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Stealth Black Tee',
      price: 899,
      image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
    },
    {
      name: 'Classic Fit Tee',
      price: 699,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqVj61qvdwXqbbUx6FtFVlxAOwDp0tlYKLV4ExBYeDtpJLZctE4OeYH_Q3uyi2QSzCEzOD-KPieTsyuhd7sh0cuzDx06xK3TG6Ew46lFE-Y0RSTn7aQtiLug',
    },
    {
      name: 'White Cotton Tee',
      price: 749,
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Urban Street Tee',
      price: 849,
      image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
    },
    {
      name: 'Slim Fit Gray Tee',
      price: 799,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqVj61qvdwXqbbUx6FtFVlxAOwDp0tlYKLV4ExBYeDtpJLZctE4OeYH_Q3uyi2QSzCEzOD-KPieTsyuhd7sh0cuzDx06xK3TG6Ew46lFE-Y0RSTn7aQtiLug',
    },
    {
      name: 'Minimal Logo Tee',
      price: 899,
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Retro Stripe Tee',
      price: 849,
      image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
    },
  ],
  Women: [
    {
      name: 'Floral Pink Tee',
      price: 749,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
    },
    {
      name: 'White Cotton V-Neck',
      price: 699,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
    },
    {
      name: 'Soft Gray Tee',
      price: 799,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-YI3wEud7aXjL8ReWawl5TFu7Xg3GrTvSdNqBgViax5esvg7G1Sntd_Omw0o811iCbfY6CBq1R4K5_8JFH3F7Y_GufndQiXUauqV__hcAxRCv3-OI2Y0I',
    },
    {
      name: 'Striped Crop Top',
      price: 899,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
    },
    {
      name: 'Oversized Tee Dress',
      price: 849,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
    },
    {
      name: 'Black Stretch Tee',
      price: 749,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-YI3wEud7aXjL8ReWawl5TFu7Xg3GrTvSdNqBgViax5esvg7G1Sntd_Omw0o811iCbfY6CBq1R4K5_8JFH3F7Y_GufndQiXUauqV__hcAxRCv3-OI2Y0I',
    },
    {
      name: 'Eco Fabric Tee',
      price: 799,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
    },
    {
      name: 'Graphic Tee',
      price: 899,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
    },
  ],
  Kids: [
    {
      name: 'Space Explorer Tee',
      price: 599,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
    },
    {
      name: 'Dinosaur Print Tee',
      price: 499,
      image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
    },
    {
      name: 'Cartoon Character Tee',
      price: 549,
      image: 'https://images.meesho.com/images/products/547425891/oyb2n_1200.jpg',
    },
    {
      name: 'Rainbow Unicorn Tee',
      price: 649,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
    },
    {
      name: 'Superhero Tee',
      price: 699,
      image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
    },
    {
      name: 'Blue Cotton Tee',
      price: 499,
      image: 'https://images.meesho.com/images/products/547425891/oyb2n_1200.jpg',
    },
    {
      name: 'Animal Friends Tee',
      price: 599,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
    },
    {
      name: 'Stars & Moon Tee',
      price: 599,
      image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
    },
  ],
};

export default products;
