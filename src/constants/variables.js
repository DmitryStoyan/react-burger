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

// function setUniqueId() {
//   return Date.now() * Math.random();
// }

// const totalPrice = useMemo(() => {
//   return (bun ? bun.price * 2 : 0) + filling.reduce((acc, item) => acc + item.price, 0);
// }, [order]);
