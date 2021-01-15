import React, { useState } from 'react';
import { AdCategory } from './components/AdCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
  // const categories = ['Uno', 'Dos', 'Tres'];
  const [categories, setCategories] = useState(['perro']);

  // const handleAdd = () => {
  //   setCategories(cat => [...cat, 'Prueba']);
  // }

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AdCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  );
};

export default GiftExpertApp;