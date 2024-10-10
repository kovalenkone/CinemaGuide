import ReactDOM from 'react-dom';
import styles from './modal.module.scss';
import CloseIcon from '@/assets/icons/CloseIcon';

interface ModalProps {
  children: React.ReactNode
  isOpened: boolean
  size?: 'default' | 'large'
  onClose: () => void
}

export interface CustomEvent extends React.MouseEvent<HTMLDivElement> {
  _isClickWithinModal?: boolean
}

const Modal = ({ children, isOpened, size = 'default', onClose }: ModalProps) => {
  const node = document.getElementById('modal')
  if (!node) return

  const onClickOverlay = (event: CustomEvent) => {
    !event._isClickWithinModal && onClose() 
  }
  
  const onClickModal = (event: CustomEvent) => {
    event._isClickWithinModal = true
  }

  return ReactDOM.createPortal ((
    <div
      className={styles.overlay} 
      onClick={(event) => onClickOverlay(event)}
      data-modal-visible={isOpened}
    >
      <div 
        className={styles.modal} 
        onClick={(event) => onClickModal(event)}
        data-modal-size={size}
      >
        <button className={styles.closeModalButton} onClick={onClose}>
          <CloseIcon />
        </button>

        {children}
      </div>
    </div>
  ), node)
}

export default Modal
