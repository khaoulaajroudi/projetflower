import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { IsVue,DeleteReview } from "../JS/Actions";

function Review() {
  const Revie = useSelector((state) => state.Review);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 class="heading">
        {" "}
        customer's <span>review</span>{" "}
      </h1>

      <div class="box-containerR">
        {Revie.map((el) => (
          <div class="boxR" onClick={() => dispatch(IsVue(el.id))}>
            <div class="stars">
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={el.rating}
                size={24}
                activeColor="#e84393"
              />
              <div>
                {el.vue ? (
                  <img src="check.png" className="check" />
                ) : (
                  <img src="checked.png" className="check" />
                )}
              </div>
            </div>
            <p>{el.message}</p>
            <div class="user">
              <img src={el.profil} alt="" />
              <div class="info">
                <h3>{el.proprot}</h3>
                <span>{el.customer}</span>
              </div>
            </div>
            {el.vue ?(
            <div className="delete">
              <img src="delete.png"  onClick={() => dispatch(DeleteReview(el.id))}/>
            </div>):null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
