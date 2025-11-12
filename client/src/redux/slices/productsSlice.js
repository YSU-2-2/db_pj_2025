import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 백엔드 API URL - 나중에 실제 서버 주소로 변경
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 비동기 액션: 전체 상품 조회
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/products`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '상품을 불러오는데 실패했습니다.');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // 전체 상품 목록
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = productsSlice.actions;
export default productsSlice.reducer;
