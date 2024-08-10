import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const images = [
    'https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/970/201/126/titanic-movie-wallpaper-preview.jpg',
   
    'https://c4.wallpaperflare.com/wallpaper/40/425/131/mjolnir-the-hammer-of-thor-thor-mjolnir-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/346/729/66/spiderman-hd-digital-art-superheroes-wallpaper-preview.jpg',
  ];

  return (
    <Carousel responsive={responsive} className='   flex items-center '>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="banner image"  className='mt-[15px] ml-[60px] w-[90%] h-[500px] bg-cover bg-center rounded-2xl'/>
        </div>
      ))}
    </Carousel>
  );
};
export default Banner