import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 비동기 액션: 장바구니 조회
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/cart/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '장바구니를 불러오는데 실패했습니다.');
    }
  }
);

// 비동기 액션: 장바구니에 상품 추가
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/cart/${userId}`, {
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '장바구니 추가에 실패했습니다.');
    }
  }
);

// 비동기 액션: 장바구니 상품 수량 변경
export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ userId, itemId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/cart/${userId}/${itemId}`, {
        quantity,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '수량 변경에 실패했습니다.');
    }
  }
);

// 비동기 액션: 장바구니 상품 삭제
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, itemId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/cart/${userId}/${itemId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || '상품 삭제에 실패했습니다.');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // 장바구니 상품 목록
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // 장바구니 조회
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 장바구니 추가
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 수량 변경
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 상품 삭제
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
