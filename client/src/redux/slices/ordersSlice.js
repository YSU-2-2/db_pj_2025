import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 비동기 액션: 주문 내역 조회
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/orders/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '주문 내역을 불러오는데 실패했습니다.');
    }
  }
);

// 비동기 액션: 주문 생성
export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async ({ userId, orderData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/orders/${userId}`, orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '주문 생성에 실패했습니다.');
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [], // 주문 목록
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
      // 주문 내역 조회
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 주문 생성
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [action.payload, ...state.items]; // 새 주문을 맨 앞에 추가
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = ordersSlice.actions;
export default ordersSlice.reducer;
