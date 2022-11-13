import React, { useEffect } from 'react';

const test = () => {
  const [data, setdata] = useState([]);
  const [filtered, setfiltered] = useState(data);

  const [rating, setrating] = useState(null);
  const [city, setcity] = useState(null);
  const [stars, setstarts] = useState(null);

  useEffect(() => {
    setfiltered(data);
    if (city) {
      setfiltered((prev) => prev.filter((el) => el.city === city));
    }
    if (stars) {
      setfiltered((prev) => prev.filter((el) => el.stars >= stars));
    }
    if (rating) {
      setfiltered((prev) => prev.filter((el) => el.rating >= rating));
    }
  }, [rating, city, stars]);
  return <div>test</div>;
};

export default test;
