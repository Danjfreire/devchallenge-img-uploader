import React from 'react'
import { app } from '../environment/firebase'


export class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            hasUploaded: false,
            downloadUrl: '',
        }
    }

    uploadFile(file) {
        console.log('uploading');
        this.setState({isUploading : true})
        app.storage()
            .ref()
            .child('public/' + file.name)
            .put(file)
            .then( snapshot => {
                console.log(snapshot);
                console.log('uploaded image successfully')
                snapshot.ref.getDownloadURL()
                .then(url => {
                    this.setState({
                        isUploading: false, hasUploaded: true, downloadUrl:url
                    });
                })
            } );
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        this.uploadFile(file);
    }

    render() {

        if (this.state.hasUploaded) {
            return (
                <div className="pageBody">
                    <div className="box">
                        <i className="check-icon"></i>
                        <h1 className="header">Uploaded Succesfully!</h1>
                        <div className="imgContainer">
                            <img src={this.state.downloadUrl} alt="uploaded" className="uploadedImage"></img>
                        </div>
                        <div className="resultContainer">
                            <div className="linkContainer">{this.state.downloadUrl}</div>
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
                    <div className="logo"></div>
                    <input type="file" id="fileElem" accept="image/*" onChange={(event => { this.handleFileChange(event) })} />
                    <p>Drag & drop your image here</p>

                </form>
                <p className>Or</p>
                <label className="btn" htmlFor="fileElem">Choose a file</label>
            </div>
        </div>

    }
} 