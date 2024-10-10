import MailIcon from '@/assets/icons/MailIcon';
import PasswordIcon from '@/assets/icons/PasswordIcon';
import { Button, Input } from '@/ui';
import styles from './registerform.module.scss';
import UserIcon from '@/assets/icons/UserIcon';
import { setIsLoginModalOpen, setIsRegisterModalOpen } from '@/store/slices/modals.slice';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { registerParams } from '@/types/auth.type';
import { authRequests } from '@/api/requests';

const RegisterForm = () => {
  const dispath = useDispatch()

  const handleLoginFormOpen = () => {
    dispath(setIsRegisterModalOpen(false))
    dispath(setIsLoginModalOpen(true))
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data: registerParams) => {
    await authRequests.register(data)
  }

  return (
    <div className={styles.registerFormWrapper}>
      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.registerFormFields}>
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<MailIcon />} placeholder='Электронная почта'  {...field} />}
          />
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<UserIcon />} placeholder='Имя'  {...field} />}
          />
          <Controller
            name='surname'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<UserIcon />} placeholder='Фамилия'  {...field} />}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input icon={<PasswordIcon />} placeholder='Пароль'  {...field} />}
          />
           <Controller
            name='confirmPassword'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input type='password' icon={<PasswordIcon />} placeholder='Подтвердите пароль'  {...field} />}
          />
        </div>
        <Button color='secondary'>Создать аккаунт</Button>
        <button 
          className={styles.registerFormRegister} 
          type='button'
          onClick={handleLoginFormOpen}
        >
          У меня есть аккаунт
        </button>
      </form>
    </div>
  );
}

export default RegisterForm
