import { useDispatch, useSelector } from 'react-redux';
import styles from './modals.module.scss';
import { RootState } from '@/store/store';
import { Modal } from '@/ui';
import AuthLayout from '../AuthLayout/AuthLayout';
import { setIsLoginModalOpen, setIsRegisterModalOpen } from '@/store/slices/modals.slice';
import { LoginForm, RegisterForm } from '@/modules';

const Modals = () => {
  const dispath = useDispatch()
  const modalsState = useSelector((state: RootState) => state.modals)

  return (
    <>
      <Modal 
        isOpened={modalsState.isLoginModalOpen} 
        onClose={() => dispath(setIsLoginModalOpen(false))}
      >
        <AuthLayout>
          <LoginForm />
        </AuthLayout>
      </Modal>
      <Modal 
        isOpened={modalsState.isRegisterModalOpen} 
        onClose={() => dispath(setIsRegisterModalOpen(false))}
      >
        <AuthLayout>
          <RegisterForm />
        </AuthLayout>
      </Modal>
    </>
  );
}

export default Modals
