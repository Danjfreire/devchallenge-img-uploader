import { Component } from 'react'

export class Uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            hasUploaded: true,
        }
    }

    render() {

        if (this.state.hasUploaded) {
            return (
                <div className="pageBody">
                    <div className="box">
                        <i className="check-icon"></i>
                        <h1 className="header">Uploaded Succesfully!</h1>
                        <div className="imgContainer">
                            <img className=""></img>
                        </div>
                        <div className="resultContainer">
                            <div className="linkContainer">https://www.figma.com/file/NxbZm3CAovYh89dFXe7EOw/Image-Uploader?node-id=0%3A1</div>
                            <button>Copy Link</button>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.isUploading) {
            return (
                <div className="pageBody">
                    <div className="uploadProgress">
                        <h1>Uploading...</h1>
                        <div className="progressBar">
                        </div>
                    </div>
                </div>
            )
        }

        return <div className="pageBody">
            <div className="box">
                <h1 className="header">Upload your image</h1>

                <p className="">File should be Jpeg, Png...</p>

                <form className="uploader">
                    <div className="logo" onDrop=""></div>
                    <input type="file" id="fileElem" accept="image/*" />
                    <p>Drag & drop your image here</p>

                </form>
                <p className>Or</p>
                <label className="btn" htmlFor="fileElem">Choose a file</label>
            </div>
        </div>

    }
} 