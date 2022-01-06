// Creates the animation and fade when the website is opened or refreshed
const intro = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        intro.classList.add('display-none');
    }, 2000);
})

function get_information() {
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {

        let data = JSON.parse(this.responseText);
        let picture_copyright = data["copyright"];
        let picture_date = data["date"];
        let picture_explanation = data["explanation"];
        let picture_media_type = data["media_type"];
        let picture_title = data["title"];
        let picture_url = data["url"];
        let imageType = ` <img id="wrapper-image" src="" class="w-100" /> `;
        let videoType = `
          <div class="ratio ratio-16x9">
            <iframe
              class="shadow-1-strong rounded"
              id="wrapper-video"
              src=""
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          `;
  
        // Returns the corresponding values of the picture
        document.getElementById("picture-author").innerHTML = picture_title;
        document.getElementById("wrapper-explanation").innerHTML = picture_explanation;
        document.getElementById("wrapper-copyright").innerHTML = picture_copyright;
        document.getElementById("intro-date").innerHTML = picture_date;
  
        // Checks whether the media type is a video or image
        if (picture_media_type === "video") {
          document.getElementById("wrapper-media").innerHTML = videoType;
          document.getElementById("wrapper-video").src = picture_url;
        } else {
          document.getElementById("wrapper-media").innerHTML = imageType;
          document.getElementById("wrapper-image").src = picture_url;
        }
      }
    };

    let api_Url = "https://api.nasa.gov/planetary/apod?";
    let api_Key = "api_key=DaFi4M1aSffvFg0EGzfCxWruc6FyhR7wStWMPtxf&";
    let datepicker_date = document.getElementById("wrapper-date").value;
    let api_Date = "date=" + datepicker_date + "&";
    let queryLink = api_Url + api_Key + api_Date;
  
    xmlhttp.open("GET", queryLink, true);
    xmlhttp.send();
  }
  

  const datePicker = document.getElementById("date-picker");
  datePicker.addEventListener("dateChange.mdb.datepicker", (e) => {
    get_information();
  });
  
  get_information().onload;

