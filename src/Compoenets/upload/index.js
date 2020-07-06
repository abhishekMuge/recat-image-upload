import React, { Component } from "react";
import Axios from "axios";
import ImageUploader from "react-images-upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { uploadPicture: null };
  }

  onDrop = async picture => {
    await this.cloundinaryUpload(picture[0]);
  };

  cloundinaryUpload = async picture => {
    try {
      const form = new FormData();

      form.append("file", picture);
      form.append("upload_preset", "nfearr2b");

      const res = await Axios.post(
        "https://api.cloudinary.com/v1_1/sniperdevil/image/upload",
        form
      );
      this.setState({ uploadPicture: res.data });
      this.notify();
    } catch (err) {
      if (err) {
        toast.dark("❌ somethig went wrong, plz try again", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 1
        });
      }
    }
  };

  notify = () =>
    toast.success("🚀 Successfully uploaded", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: 1
    });

  render() {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div>
          <ImageUploader
            className="image-upload"
            withIcon={false}
            buttonText={<i className="fas fa-cloud-upload-alt" />}
            buttonClassName="upload-btn waves-effect waves-light red light-blue darken-4"
            buttonStyles={{
              marginTop: "20px",
              padding: "10px 30px",
              background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
              boxShadow: "5px -5px 61px #b8b8b8, -5px 5px 61px #ffffff",
              color: "black",
              fontSize: "1.8rem",
              border: "2px solid black"
            }}
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
            maxFileSize={5242880}
            withPreview={false}
            label={"Upload Image to cloud"}
            labelStyles={{
              fontSize: "2rem"
            }}
            fileContainerStyle={{
              borderRedius: "30px",
              padding: "50px",
              background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
              boxShadow: "21px 21px 40px #7d7d7d, -21px -21px 40px #ffffff",
              border: "2px solid #eae8e8"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Upload;
