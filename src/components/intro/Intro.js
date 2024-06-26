
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Intro = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.5062851, // 매장의 위도
    lng: 127.0480523, // 매장의 경도
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam ligula nec mauris venenatis, id porta felis posuere. Cras feugiat tristique augue eget tincidunt. Donec laoreet malesuada ex nec condimentum. Mauris eget iaculis ante. Cras eget suscipit odio, nec ultrices dolor. Sed molestie quam in mauris pellentesque, non bibendum tellus dictum. Duis aliquet erat a tincidunt volutpat. Nam dictum dolor malesuada, faucibus leo vitae, vulputate mi.

        Pellentesque in ipsum tempus, scelerisque nisl quis, consectetur risus. In eu diam id arcu congue tristique vulputate non arcu. Suspendisse ut magna mauris. Quisque id mauris sit amet tortor efficitur fermentum. Maecenas ultrices lectus vel tortor rhoncus, in lacinia est semper. Maecenas suscipit accumsan velit, ac pellentesque quam pretium nec. In felis justo, molestie dapibus ex vitae, malesuada iaculis velit. Phasellus convallis ullamcorper metus non posuere.
        </p>

      <h2>위치</h2>
      <LoadScript googleMapsApiKey="YAIzaSyBioQQzK5zSXwLw_-1FWreOm4b8D42C_2Y">
        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={15}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>

      <h2>연락처</h2>
      <p>
        이메일: <a href="helloghostt1@gmail.com">contact@example.com</a>
      </p>
    </div>
  );
};

export default Intro;