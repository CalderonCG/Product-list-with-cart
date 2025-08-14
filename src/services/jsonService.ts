export type Dessert = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export const getDesserts = async (): Promise<Dessert[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch('/data.json');
  return res.json();
};