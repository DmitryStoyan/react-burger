// PropTypes экспортирует множество валидаторов, которые могут использоваться,
// чтобы убедиться, что данные, которые вы получаете, являются валидными.
import PropTypes from 'prop-types';

// shape()принимает объект и проверяет типы внутри объекта.
// Если объект, который мы передаем в наши свойства, имеет неправильное одно из этих свойств,
// мы получим предупреждение
export const productPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});
// Можно связать любой из вышеперечисленых валидаторов с 'isRequired', чтобы убедиться,
// что предупреждение показывается, если значение свойства не предоставлено
