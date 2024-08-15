import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import ShimmerUI from "../ShimmerUI/ShimeerUI";

const Users = () => {
  const [userdata, setUserData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    getProducts();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getProducts = async () => {
    setShowShimmer(true);
    const data = await fetch("https://dummyjson.com/products/?limit=8");
    const json = await data?.json();
    setShowShimmer(false);

    setUserData((prev) => [...prev, ...json?.products]);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      getProducts();
    }
  };

  return (
    <>
      <UserCard products={userdata} />
      {showShimmer && <ShimmerUI />}
    </>
  );
};

export default Users;
