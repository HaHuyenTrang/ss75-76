// hàm lấy tất cả thông tin sản phẩm
import axios from "axios"
const getProducts = async()=>{
    const response=await axios.get("http://localhost:8080/products")
    return response.data
}