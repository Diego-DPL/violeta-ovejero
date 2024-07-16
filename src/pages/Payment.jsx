import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button} from "@mui/material";

const stripePromise = loadStripe('TU_CLAVE_PUBLICA_DE_STRIPE');

const apiKey = 'AIzaSyAS_mvoAXfH72mldCdVCnkC2GKeiXJOyoU';
const calendarId = 'dpl.official.dj@gmail.com';

const CheckoutForm = ({ start, end, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      return;
    }

    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: 'price_1JH8bYFszqyaR4d5zF3Q0f2c', // Reemplaza con tu precio real de Stripe
      }),
    });

    const session = await response.json();

    const { error: stripeError } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (stripeError) {
      console.error(stripeError);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "20px",
                color:"#FCFFE3",
                backgroundColor: "#106579",
                borderRadius: "40px",
                paddingBottom: "10px",
                paddingTop: "10px",
                width: "50%",
              }}
            >
              Pagar y Reservar
      </Button>
    </form>
  );
};

const Payment = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const start = new Date(query.get('start'));
  const end = new Date(query.get('end'));
  const title = query.get('title');

  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col mt-[3%] mb-[5%] mr-[7%] ml-[7%]">
        <h1 className="text-4xl font-bold text-bg1 mb-4">Pago de Sesión</h1>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col'>
            <h2 className="text-2xl text-bg1 mb-5">Detalles de la sesión:</h2>
            <p>Tipo de Sesion: {title}</p>
            <p>Inicio: {start.toLocaleString()}</p>
            <p>Fin: {end.toLocaleString()}</p>
          </div>
          <div className='flex flex-col'>
            <h2 className="text-2xl text-bg1 mb-5">Informacion del pago:</h2>
            <CheckoutForm start={start} end={end} title={title} />
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Payment;