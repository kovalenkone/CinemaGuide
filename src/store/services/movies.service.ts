import { Movie } from "@/types/movie.type"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"

// export const fetchRandomMovie = createAsyncThunk<Movie, undefined, ThunkConfig<string>>(
//   'tasks/fetchRandomMovie',
//   async (_, { rejectWithValue }) => {
//     const { data, status }: AxiosResponse<TasksResponse> = await TasksApi.getTasks()

//     if (status !== ResponseStatus.Success) {
//       rejectWithValue('unsuccess')
//     }

//     return data.tasks
//   }
// )