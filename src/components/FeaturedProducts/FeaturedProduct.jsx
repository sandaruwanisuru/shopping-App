import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProduct.scss';
import axios from 'axios';

const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg',
      img2: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//model/l/i/black-full-rim-square-lenskart-air-signia-la-e13069-c1-eyeglasses_csvfile-1670848430009-7_dec_model_shoot188281_137974.jpg',
      title: 'shirt and trouser',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Grey-Full-Rim-Wayfarer-Lenskart-Air-Classic-LA-E12489-C6-Eyeglasses_lenskart-air-la-e12489-c6-eyeglasses_G_721107_02_2022.jpg',
      img2: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//model/l/i/black-grey-full-rim-wayfarer-lenskart-air-classic-la-e12489-c6-eyeglasses_18_feb_male_theme42763_150562.jpg',
      title: 'shirt and trouser',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13346-c2-eyeglasses_g_5794.jpg',
      img2: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//model/j/i/black-full-rim-rectangle-john-jacobs-rich-acetate-jj-e13346---c2-eyeglasses-celeste_22_feb_2023_m_f_shoot382556_04_03_2024.jpg',
      title: 'shirt and trouser',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13788-c1-eyeglasses_vincent-chase-vc-e13788-c1-eyeglasses_g_3342.jpg',
      img2: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//model/v/i/blue-block-phone---computer-glasses:-gold-transparent-full-rim-geometric-vincent-chase-sleek-steel-vc-e13788-c1_13_sep_m-f329067_146623_22_09_2023.jpg',
      title: 'shirt and trouser',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + '/products',
          {
            headers: {
              Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="FeaturedProduct">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          modi dolorem hic ipsam id architecto, libero dicta ullam
          necessitatibus excepturi labore cumque ab repellendus quam voluptatem,
          sit totam? Ab, quasi.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
