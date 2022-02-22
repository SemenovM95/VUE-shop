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
  console.log('saved to local storage');
}

// "Мок" для запроса данных с сервера/БД
export async function getUserCartFromDB() {
  const cart = [
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cart);
    }, 1000);
  });
}
