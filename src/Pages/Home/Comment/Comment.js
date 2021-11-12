import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Comment = () => {
    return (
        <div className="bg-cus-4 py-5">
            <Container>
                <div className="w-75 mx-auto">
                    <h1>What people say about us</h1>
                    <p className=" text-center pb-5">Where do business owners struggle? Brainstorming how to ask for the review in the text. There’s a valid fear of not knowing what to say. At the very least, you could simply</p>
                </div>
                <div className="comment-grid">
                    <Col>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg" alt="" className="comment-img" />
                            </div>
                            <div>
                                <h3>Berry lantern</h3>
                                <p>You just plug in the name of your business and your zip code, and let it get to work. For the purposes of this demo, I used the Google My Business listing of a Mexican</p>
                            </div>
                        </div> 
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="https://www.al.com/resizer/GT06i1VRWpqtgAHmxaLJc5sh2gw=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WEDAUZS6UZGFDLZHWBUNPYYM4Q.jpg" alt="" className="comment-img" />
                            </div>
                            <div>
                                <h3>Michel Host</h3>
                                <p>These specific review request text templates give you an opportunity to encourage your existing customers to address one of the primary concerns new customers </p>
                            </div>
                        </div> 
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="" className="comment-img" />
                            </div>
                            <div>
                                <h3>Dwanye John</h3>
                                <p>These specific review request text templates give you an opportunity to encourage your existing customers to address one of the primary concerns new customers </p>
                            </div>
                        </div> 
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=170667a&w=0&h=6-AdcacaQelZJy5ASr9A9cmueE6PmMtSabYE72ZYz9w=" alt="" className="comment-img" />
                            </div>
                            <div>
                                <h3>Jenny amadon</h3>
                                <p>You just plug in the name of your business and your zip code, and let it get to work. For the purposes of this demo, I used the Google My Business listing of a Mexican</p>
                            </div>
                        </div> 
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Comment;