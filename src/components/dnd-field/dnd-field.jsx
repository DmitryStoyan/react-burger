
import styles from './dnd-field.module.css'
import { dndFieldPropTypes } from '../../utils/components-prop-types'

const DndField = ({ target, text, onHover }) => {

  const classes = `${styles.wrapper} ${styles.borderColor}`

  const borderColor = onHover ? classes : styles.wrapper

  return (
    <section className={styles.field}>
      <div className={borderColor} ref={target}>
        <p className={styles.title}>{text}</p>
      </div>
    </section >
  )
}

DndField.propTypes = dndFieldPropTypes.isRequired

export default DndField
