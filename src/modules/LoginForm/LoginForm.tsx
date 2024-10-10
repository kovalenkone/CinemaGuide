import { authRequests } from '@/api/requests';
import styles from './loginform.module.scss';
import MailIcon from '@/assets/icons/MailIcon';
import PasswordIcon from '@/assets/icons/PasswordIcon';
import { setIsLoginModalOpen, setIsRegisterModalOpen } from '@/store/slices/modals.slice';
import { loginParams } from '@/types/auth.type';
import { Button, Input } from '@/ui';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispath = useDispatch()

  const handleRegisterFormOpen = () => {
    dispath(setIsLoginModalOpen(false))
    dispath(setIsRegisterModalOpen(true))
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: loginParams) => {
    await authRequests.login(data)
  }

  return (
    <div className={styles.loginFormWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginFormFields}>
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<MailIcon />} placeholder='Электронная почта'  {...field} />}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<PasswordIcon />} placeholder='Пароль'  {...field} />}
          />
        </div>
        <Button color='secondary'>Войти</Button>
        <button 
          className={styles.loginFormRegister} 
          type='button'
          onClick={handleRegisterFormOpen}
        >
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default LoginForm
