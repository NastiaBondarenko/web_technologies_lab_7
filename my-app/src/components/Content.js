import React from "react"
import Image from "./Image"

class ImageDate{
    constructor(className ="image", width="500", src="frankfurt.jpg"){
        this.className = className;
        this.width = width;
        this.src = src;

    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesCounter: 1,
            imagesObjects: [new ImageDate()]
        };
      }

    pushImage(){
        this.state.imagesObjects.push(new ImageDate());
    }  

    popImage(){
        this.state.imagesObjects.pop(new ImageDate());
    }

    add_image(){
        this.pushImage();
        this.setState({
            imagesCounter: this.state.imagesCounter + 1,
          });
    }
    
    delete_image(){
        this.popImage();
        this.setState({
            imagesCounter: this.state.imagesCounter - 1,
          });
    }
    
    zoom_image(){
        let images = document.getElementsByClassName("image");
        let image = images[images.length - 1];
        let image_width = image.style.width;
        let width_length = image_width.length;
        image.style.width = (image_width.slice(0, width_length-2)/10*11)+"px";
    }
    
    anti_zoom_image(){
        let images = document.getElementsByClassName("image");
        let image = images[images.length - 1];
        let image_width = image.style.width;
        let width_length = image_width.length;
        image.style.width = (image_width.slice(0, width_length-2)/11*10)+"px";
    }
    render() {
      return <div id="content">
      <p>Хоббі:</p>
      <ul>
          <li>Читання</li>
          <li>Подорожі</li>
          <li>Танці</li>
      </ul>

      <p>Улюблені фільми:</p>
      <ol>
          <li>"Дивергент", 2014</li>
          <li>"Мої думки тихі", 2019</li>
          <li>"Заборонений", 2019</li>
      </ol>

      <p>Фрáнкфурт-на-Мáйні (нім. Frankfurt am Main) або просто Фрáнкфурт — місто в Німеччині. Найбільше місто землі Гессен. Населення міста становить понад 670 000 мешканців. З середніх віків Франкфурт належить до значних міських центрів Німеччини. Перша згадка про місто датується 794 роком.
      </p>   
      <p>У 1875 Франкфурт нараховував понад 100 000 жителів, в 1928 — понад 500 000. У всій області Майн-Рейнського регіону (нім. Frankfurt/Rhein-Main) сьогодні живе понад 5 млн жителів. Хмарочоси Франкфурта належать до найвищих будинків Європи.</p>
      {this.state.imagesObjects.map((image) => 
        <Image name={image.className} width={image.width} src={image.src} /> )}
      <div className = "buttons">
        <button className = "butt" onClick={() => this.add_image()} >Додати</button>
        <button className = "butt" onClick={() => this.zoom_image()}>Збільшити</button>
        <button className = "butt" onClick={() => this.anti_zoom_image()}>Зменшити</button>
        <button className = "butt" onClick={() => this.delete_image()}>Видалити</button>
    </div>
  </div>;
    }
  }


export default Content