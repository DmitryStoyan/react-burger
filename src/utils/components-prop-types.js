import PropTypes from 'prop-types';

export const ingredientType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
})

export const dndFieldPropTypes = PropTypes.shape({
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  onHover: PropTypes.func.isRequired,
  text: PropTypes.string,
})

export const constructorIngredientPropTypes = PropTypes.shape({
  ingredient: ingredientType.isRequired,
  index: PropTypes.number.isRequired,
  onMove: PropTypes.func.isRequired
})
export const stuffListPropTypes =  PropTypes.shape({
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  onHover: PropTypes.func.isRequired,
})

export const ingredientsNavigationPropTypes = PropTypes.shape({
  tabs: PropTypes.arrayOf(PropTypes.string),
  currentTab: PropTypes.string,
  handleClick: PropTypes.func
})

export const ingredientsListPropTypes = PropTypes.shape({
  ingredients: PropTypes.arrayOf(ingredientType),
  ref: PropTypes.func.isRequired,
  onOpen: PropTypes.func
})
export const ingredientsItemPropTypes = PropTypes.shape({
  ingredient: ingredientType,
  onOpen: PropTypes.func
})
export const modalPropTypes = PropTypes.shape({
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
})
export const modalOverlayPropTypes = PropTypes.shape({
  onClose: PropTypes.func,
})
export const useSwitchTabsPropTypes = PropTypes.shape({
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  currentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  switchTab: PropTypes.func.isRequired,
})

