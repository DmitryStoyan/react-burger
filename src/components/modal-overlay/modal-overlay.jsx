import styles from './modal-overlay.module.css';
import { modalOverlayPropTypes } from '../../utils/components-prop-types';

export default function ModalOverlay({ onClose }) {

  const closeModalOverlay = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={closeModalOverlay}>
    </div>
  )
}
ModalOverlay.propTypes = modalOverlayPropTypes.isRequired
