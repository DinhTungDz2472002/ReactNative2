import api from "./api";
import { mapPhoto } from "./item.mapper";


export const getList = async () => {
  const res = await api.get('/photos');
  return res.data.photos.map(mapPhoto);
};
//lấy theo id
export const getDetail = async (id:number) => {
    const res = await api.get(`/photos/${id}`);
    return res.data.photos.map(mapPhoto);
};
