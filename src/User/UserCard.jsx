import { useState } from "react";
import { getFullName } from "../Utils/AppHelper";

const UserCard = ({ products }) => {
  // const [cardInfo, setCardInfo] = useState(userdata);

  // console.log(cardInfo?.firstName);
  // console.log(cardInfo?.lastName);

  console.log(products);

  return (
    <>
      <div className="card-container-box mt-2rem">
        {products?.length > 0 &&
          products?.map((item, idx) => {
            return (
              <div className="card-item-box" key={idx}>
                <img src={item?.thumbnail} alt="logo" className="card-image" />
                <h1 className="heading">
                  {/* {getFullName(item?.firstName, item?.lastName)} */}
                  {item?.brand}
                </h1>
                <div className="card-content">
                  <p>{item?.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserCard;
