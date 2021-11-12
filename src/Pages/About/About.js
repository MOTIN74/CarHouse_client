import React from 'react';
import { Container} from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>

                <h1 className="fw-bold">About us</h1>

                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <h5>WELCOME TO AUTO CAR</h5>
                        <p>Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker popularised in the 1960s with the release of Letraset sheets containing  passages, and more recently with desktop publishing software like Aldus PageMaker popularised in the 1960s with the release of Letraset sheets containing  passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="w-100" src="https://i.ibb.co/wSqn1Rd/car-10.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-4">
                        <h5>Corrections Policy</h5>
                    <p>Can you return a car after purchase?
                    If you've purchased a new or used car and you're having second thoughts about it, in most cases, you won't be able to return the car. The dealer who sold you the car is usually not legally obligated to take the car back and issue you a refund or exchange after you've signed the sales contract.</p>
                    </div>
                </div>
            </Container>
            <div className="bg-img">
                <Container>
                <div className="py-5">
                    <h3 className="text-warning">TRIP WORLD and part of the CAR Network</h3>
                    <p className="text-danger">Trip world is a rapidly-growing global online travel agency, Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? Trip.com has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With Trip.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.Easily Customize Your Trip with the Best Hotel and Flight Deals
                    It's easy to customize your travel experience with our robust flight and hotel search filter options and Trip.com travel tools like flight fare alerts, deal-finder calendar, and early bird deals. Trip.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.Featured Hotel DestinationsHotels in Shanghai</p>
                </div>
                </Container>
            </div>
            <Container>
                <div className="row py-5">
                    <div className="col-12 col-md-8">
                        <h3>Corrections Policy</h3>
                        <p className="jstfy">If you rent a vehicle for business purposes, you can deduct the full cost as a business expense. ... For example, you may have taxes, insurance, and fuel costs added to the base rental rate. You can't write off the full cost of renting a vehicle and the mileage as well. You must choose one or the other.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4>Editorial Policy</h4>
                        <p className="text-primary">Using your car while at your business destination. You can deduct actual expenses or the standard mileage rate, as well as business-related tolls and parking fees. If you rent a car, you can deduct only the business-use portion for the expenses.</p>
                    </div>
                </div>
                
            </Container>
        </div>
    );
};

export default About;