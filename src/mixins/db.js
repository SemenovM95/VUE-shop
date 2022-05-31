const userCart = [
  {
    quantity: 4,
    id: 2,
    title: 'BLACK WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black',
    size: 'M',
  },
  {
    quantity: 2,
    id: 1,
    title: 'BLUE CASUAL MEN JACKET',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'XL',
  },
  {
    quantity: 1,
    id: 3,
    title: 'BLACK & BLUE MEN HOODIE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black/Blue',
    size: 'M',
  },
];
const catalogList = [
  {
    id: 1,
    title: 'BLUE CASUAL MEN JACKET',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'XL',
    img: 'product-img-1.png',
  },
  {
    id: 2,
    title: 'BLACK WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black',
    size: 'M',
    img: 'product-img-2.png',
  },
  {
    id: 3,
    title: 'BLACK & BLUE MEN HOODIE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black/Blue',
    size: 'M',
    img: 'product-img-3.png',
  },
  {
    id: 4,
    title: 'YELLOW MEN TROUSERS',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Yellow',
    size: 'L',
    img: 'product-img-4.png',
  },
  {
    id: 5,
    title: 'LIGHT BLUE WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'M',
    img: 'product-img-5.png',
  },
  {
    id: 6,
    title: 'SWAMP GREEN WOMEN BLOUSE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Swamp green',
    size: 'S',
    img: 'product-img-6.png',
  },
  {
    id: 7,
    title: 'BLUE CASUAL MEN JACKET-1',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'XL',
    img: 'product-img-1.png',
  },
  {
    id: 8,
    title: 'BLACK WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black',
    size: 'M',
    img: 'product-img-2.png',
  },
  {
    id: 9,
    title: 'BLACK & BLUE MEN HOODIE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black/Blue',
    size: 'M',
    img: 'product-img-3.png',
  },
  {
    id: 10,
    title: 'YELLOW MEN TROUSERS',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Yellow',
    size: 'L',
    img: 'product-img-4.png',
  },
  {
    id: 11,
    title: 'LIGHT BLUE WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'M',
    img: 'product-img-5.png',
  },
  {
    id: 12,
    title: 'SWAMP GREEN WOMEN BLOUSE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Swamp green',
    size: 'S',
    img: 'product-img-6.png',
  },
  {
    id: 13,
    title: 'BLUE CASUAL MEN JACKET-2',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'XL',
    img: 'product-img-1.png',
  },
  {
    id: 14,
    title: 'BLACK WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black',
    size: 'M',
    img: 'product-img-2.png',
  },
  {
    id: 15,
    title: 'BLACK & BLUE MEN HOODIE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Black/Blue',
    size: 'M',
    img: 'product-img-3.png',
  },
  {
    id: 16,
    title: 'YELLOW MEN TROUSERS',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Yellow',
    size: 'L',
    img: 'product-img-4.png',
  },
  {
    id: 17,
    title: 'LIGHT BLUE WOMEN BLAZER',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Blue',
    size: 'M',
    img: 'product-img-5.png',
  },
  {
    id: 18,
    title: 'SWAMP GREEN WOMEN BLOUSE',
    desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: '52.00',
    color: 'Swamp green',
    size: 'S',
    img: 'product-img-6.png',
  },
];

export function getFromLS(key) {
  const found = JSON.parse(localStorage.getItem(key));
  const now = new Date();
  if (found) {
    if (now.getTime() > found.expiry) {
      return new Error(`Local Storage key "${key}" has expired`);
    }
    return found.data;
  }
  return new Error(`Nothing found with key: ${key}`);
}

export function saveToLS(key, data) {
  const expirationTime = 30000;
  const now = new Date();
  const expiry = now.getTime() + expirationTime;
  const item = { data, expiry };
  localStorage.setItem(key, JSON.stringify(item));
}

// "Мок" для запроса данных с сервера/БД
export async function getUserCartFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userCart);
    }, 1000);
  });
}

export async function getGoodsListFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(catalogList);
    }, 1000);
  });
}

export async function getProductFromDB(id) {
  return new Promise((resolve, reject) => {
    const found = catalogList.find((el) => el.id === id);
    if (found) {
      setTimeout(() => {
        resolve(found);
      }, 1000);
    } else {
      reject(new Error(`Nothing found with key: ${id}`));
    }
  });
}

// отдает ОЧЕНЬ разные по aspect-ratio картинки и шакалит верстку
export async function getGoodsListFromAPI() {
  return fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
