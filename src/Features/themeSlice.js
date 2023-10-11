import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true,
  reducers: {
    toogleTheme: (state, action) => {
      state = !state;
    },
  },
});
