import api from "./api";
import { mapPhoto } from "./item.mapper";


export const getList = async (signal?:AbortSignal) => {
  const res = await api.get('/photos', {signal});
  return res.data.photos.map(mapPhoto);
};
//lấy theo id
export const getDetail = async (id:number) => {
    const res = await api.get(`/photos/${id}`);
    // console.log('DETAIL RAW:', res.data);
    return mapPhoto(res.data.photo);
};
