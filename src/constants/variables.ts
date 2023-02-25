// все возможные типы ингридиентов
export const ProductType = {
  Bun: {
    type: 'bun',
    name: 'Булки',
  },
  Main: {
    type: 'main',
    name: 'Начинки',
  },
  Sauce: {
    type: 'sauce',
    name: 'Соусы',
  },
};

export function formatDate(string: string | number | Date) {
  return new Date(string).toLocaleString();
}

// eslint-disable-next-line consistent-return
export const checkStatus = (status: string) => {
  if (status === 'done') {
    return 'Создан';
  }
};

// function setUniqueId() {
//   return Date.now() * Math.random();
// }

// const totalPrice = useMemo(() => {
//   return (bun ? bun.price * 2 : 0) + filling.reduce((acc, item) => acc + item.price, 0);
// }, [order]);
