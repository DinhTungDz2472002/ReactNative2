// trong dữ liệu đang không khớp nên giờ phải gắn

export const mapPhoto = (item : any) =>({
     id: item.id,
    title: item.title,
    image: item.url,
    subtitle: item.description,
});

