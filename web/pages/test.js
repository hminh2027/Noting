import React, { useEffect } from "react";
import productApi from "../src/api/apis/productApi";

const Test = () => {
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (e) {
        console.log({ e });
      }
    };
    fetchProductList();
  }, []);

  return <div>Test</div>;
};

export default Test;
