import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6851789b8612b47a2c0a39e9.mockapi.io/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/contacts", contactData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
