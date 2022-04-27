import banner1Img from '../../assets/categories/banner1.png'
import banner2Img from '../../assets/categories/banner2.png'
import banner3Img from '../../assets/categories/banner3.png'
import banner4Img from '../../assets/categories/banner4.png'
import banner5Img from '../../assets/categories/banner5.png'

import { Container } from "./style";

export function Gallery() {
  return (
    <Container>
      <div className="gallery">
        <div>
          <figure className="gallery-item">
            <img
              className="gallery-image"
              src={banner1Img}
              alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
            />
            <figcaption>Binco</figcaption>
          </figure>

          <figure className="gallery-item">
            <img
              className="gallery-image"
              src={banner2Img}
              alt="sunset behind San Francisco city skyline"
            />
            <figcaption>Binco</figcaption>
          </figure>
        </div>

        <div>
          <figure className="gallery-item">
            <img
              className="gallery-image"
              src={banner3Img}
              alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
            />
            <figcaption>Binco</figcaption>
          </figure>

          <figure className="gallery-item">
            <img
              className="gallery-image"
              src={banner4Img}
              alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
            />
            <figcaption>Binco</figcaption>
          </figure>
        </div>

        <div>
          <figure className="gallery-item">
            <img  className="gallery-image"
              src={banner5Img}
              alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
            />
            <figcaption>Binco</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}
