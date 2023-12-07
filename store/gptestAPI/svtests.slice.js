import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_svtest_list = createAsyncThunk(
  "svtests/api_v1_svtest_list",
  async payload => {
    const response = await apiService.api_v1_svtest_list(payload)
    return response.data
  }
)
export const api_v1_svtest_create = createAsyncThunk(
  "svtests/api_v1_svtest_create",
  async payload => {
    const response = await apiService.api_v1_svtest_create(payload)
    return response.data
  }
)
export const api_v1_svtest_retrieve = createAsyncThunk(
  "svtests/api_v1_svtest_retrieve",
  async payload => {
    const response = await apiService.api_v1_svtest_retrieve(payload)
    return response.data
  }
)
export const api_v1_svtest_update = createAsyncThunk(
  "svtests/api_v1_svtest_update",
  async payload => {
    const response = await apiService.api_v1_svtest_update(payload)
    return response.data
  }
)
export const api_v1_svtest_partial_update = createAsyncThunk(
  "svtests/api_v1_svtest_partial_update",
  async payload => {
    const response = await apiService.api_v1_svtest_partial_update(payload)
    return response.data
  }
)
export const api_v1_svtest_destroy = createAsyncThunk(
  "svtests/api_v1_svtest_destroy",
  async payload => {
    const response = await apiService.api_v1_svtest_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const svtestsSlice = createSlice({
  name: "svtests",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_svtest_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_svtest_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_svtest_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_svtest_list,
  api_v1_svtest_create,
  api_v1_svtest_retrieve,
  api_v1_svtest_update,
  api_v1_svtest_partial_update,
  api_v1_svtest_destroy,
  slice: svtestsSlice
}
