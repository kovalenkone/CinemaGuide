export interface ThunkConfig<T>  {
  rejectValue: T
}

// // Auth
// export interface SigninUserParams {
//   email: string
//   password: string
// }
// export interface SignupUserParams extends User {
//   name: string
//   surname: string
//   email: string
//   password: string
//   confirmPassword: string
// }
// export interface AuthResponse {
//   message: string
//   userData: UserData 
// }

// Movies
// export interface CreateTaskParams {
//   name: string
//   boardStatus: BoardStatus
// }
// export interface EditTaskParams extends Partial<Task> {
//   _id: string
// }

// export interface TasksResponse {
//   message: string
//   tasks: Task[]
// }
// export interface TaskResponse {
//   message: string
//   task: Task
// }