/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Review from '../review/Review';
import ReviewForm from '../review-form/ReviewForm_v2';


const ItemTabs = ({ value: item }) => {

    const [reviews, setReviews] = useState([])

    console.log("trr",item)

    useEffect(() => {
                    setReviews(item?.reviewsarray)
                    console.log("trr",reviews,item?.reviewsarray)
    }, [item])


    const addNewReview = review => {
        setReviews(reviews.concat(review))
    }

    const renderReviews = (reviews) => {
        return reviews.map((review, idx) => {
            return (<Review value={review} key={idx} />)
        })
    }

    item.reviews = reviews

    return (
        <>
       <div class="accordion" id={"accordionExample"+item.id}>
  <div class="card">
    <div class="card-header" id={"headingOne"+item.id}>
      <h2 class="mb-0">
        <button class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={"#collapseOne"+item.id} aria-expanded="false" aria-controls={"collapseOne"+item.id}>
          Description
        </button>
      </h2>
    </div>

    <div id={"collapseOne"+item.id} class="collapse" aria-labelledby={"headingOne"+item.id} data-parent={"#accordionExample"+item.id}>
      <div class="card-body">
        {item?.description ? (item?.description):"Not Yet"}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id={"headingTwo"+item.id}>
      <h2 class="mb-0">
        <button class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={"#collapseTwo"+item.id} aria-expanded="false" aria-controls={"collapseTwo"+item.id}>
          Specification
        </button>
      </h2>
    </div>
    <div id={"collapseTwo"+item.id} class="collapse" aria-labelledby={"headingTwo"+item.id} data-parent={"#accordionExample"+item.id}>
      <div class="card-body">
          {(item?.specification)?(item?.specification):"Not Yet"}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id={"headingThree"+item.id}>
      <h2 class="mb-0">
        <button class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={"#collapseThree"+item.id} aria-expanded="false" aria-controls={"collapseThree"+item.id}>
          Reviews
        </button>
      </h2>
    </div>
    <div id={"collapseThree"+item.id} class="collapse" aria-labelledby={"headingThree"+item.id} data-parent={"#accordionExample"+item.id}>
      <div class="card-body">
      <div>
                    <div className="row">
                        <div className="col-12">
                            <br />
                            {renderReviews(item.reviews)}
                            <ReviewForm onNewReview={review => addNewReview(review)} />
                        </div>
                    </div>

                </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default ItemTabs;