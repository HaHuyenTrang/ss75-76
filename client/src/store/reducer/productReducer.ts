import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// lấy sp
export const getAllProduct:any = createAsyncThunk("product/getAllProduct",async()=>{
    const response=await axios.get("http://localhost:8080/products")
    return response.data
})
// thêm sản phẩm
export const  addProduct:any = createAsyncThunk("product/addProduct", async(product)=>{
    const response = await axios.post("http://localhost:8080/cart",product)
    return response.data
})
const producReducer = createSlice({
    name:"product",
    initialState:{
        product:[],
        cart:[]
    },
    reducers:{

    },
    extraReducers:(buider)=>{
        buider
        .addCase(getAllProduct.pending,(state,action)=>{
            console.log("chờ xử lí");
            
        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
           state.product=action.payload
        })
        .addCase(getAllProduct.rejected,(state,action)=>{
            console.log("xảy ra lỗi");
            
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            console.log("mua thành công");
            
        })
        .addCase(addProduct.rejected,(state,action)=>{
            console.log("mua thất bại");
            
        })
    }
})
export default producReducer.reducer;