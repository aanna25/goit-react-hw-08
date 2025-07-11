import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete instance.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearAuthHeader();
    localStorage.removeItem("token");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token || localStorage.getItem("token");

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    try {
      setAuthHeader(token);
      const res = await instance.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
