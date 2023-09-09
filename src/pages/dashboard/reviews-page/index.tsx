import React, { useState, useEffect } from "react";
import ScreenCard from "../../../components/card/screen-card";
import axios from "axios";
import ReviewCard from "../../../components/card/reviewCard";

type Product = {
  name: string;
  body: string;
};

export default function ReviewsPage() {
  const [listData, setListData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="row p-0 m-0" style={{ background: "#ffffff" }}>
        <ScreenCard title="Reviews Page" />
        <div className="col-12">
          <div className="row p-0 m-0">
            {listData.map((x, i) => (
              <ReviewCard key={i} name={x.name} body={x.body} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
