import Card from '../Card/Card';
import './List.scss';
const data = [
  {
    id: 1,
    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg',
    title: 'shirt and trouser',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Grey-Full-Rim-Wayfarer-Lenskart-Air-Classic-LA-E12489-C6-Eyeglasses_lenskart-air-la-e12489-c6-eyeglasses_G_721107_02_2022.jpg',
    title: 'shirt and trouser',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13346-c2-eyeglasses_g_5794.jpg',
    title: 'shirt and trouser',
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13788-c1-eyeglasses_vincent-chase-vc-e13788-c1-eyeglasses_g_3342.jpg',
    title: 'shirt and trouser',
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 5,
    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gunmetal-grey-solid-full-rim-clubmaster-john-jacobs-jj-tints-jj-s13089-c1-sunglasses_g_8903_10_05_2023.jpg',
    title: 'shirt and trouser',
    isNew: false,
    oldPrice: 25,
    price: 22,
  },
];
const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
